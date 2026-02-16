/**
 * FAQSchema Component
 * Generates structured data (JSON-LD) for FAQ sections to improve SEO
 *
 * @example
 * <FAQSchema
 *   faqs={[
 *     { question: "What is...?", answer: "It is..." },
 *     { question: "How does...?", answer: "It works by..." }
 *   ]}
 * />
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
