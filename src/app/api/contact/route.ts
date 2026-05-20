import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 500;
const MAX_CHALLENGE_LENGTH = 5000;

type FormType = 'pilot' | 'consultation';

interface ContactPayload {
  name?: string;
  institution?: string;
  email?: string;
  challenge?: string;
  formType?: FormType;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function validatePayload(body: ContactPayload): string | null {
  const name = body.name?.trim();
  const institution = body.institution?.trim();
  const email = body.email?.trim();
  const challenge = body.challenge?.trim();

  if (!name || !institution || !email || !challenge) {
    return 'All fields are required';
  }
  if (name.length > MAX_FIELD_LENGTH || institution.length > MAX_FIELD_LENGTH) {
    return 'Field length exceeded';
  }
  if (!EMAIL_REGEX.test(email) || email.length > MAX_FIELD_LENGTH) {
    return 'Invalid email';
  }
  if (challenge.length > MAX_CHALLENGE_LENGTH) {
    return 'Message too long';
  }
  if (body.formType && body.formType !== 'pilot' && body.formType !== 'consultation') {
    return 'Invalid form type';
  }
  return null;
}

function formTypeLabel(formType: FormType | undefined): string {
  if (formType === 'pilot') return 'Specialist inquiry';
  if (formType === 'consultation') return 'Executive consultation';
  return 'Enterprise inquiry';
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const name = body.name!.trim();
  const institution = body.institution!.trim();
  const email = body.email!.trim();
  const challenge = body.challenge!.trim();
  const formType = body.formType;
  const inquiryLabel = formTypeLabel(formType);

  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'contacto@yieldge.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'contacto@yieldge.com';

  const subject = `[Yieldge Enterprise] ${inquiryLabel} — ${institution}`;

  const html = `
    <h2>New enterprise contact request</h2>
    <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Institution:</strong> ${escapeHtml(institution)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Operational challenge:</strong></p>
    <p>${escapeHtml(challenge).replace(/\n/g, '<br>')}</p>
  `.trim();

  const text = [
    'New enterprise contact request',
    `Inquiry type: ${inquiryLabel}`,
    `Name: ${name}`,
    `Institution: ${institution}`,
    `Email: ${email}`,
    'Operational challenge:',
    challenge,
  ].join('\n');

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
