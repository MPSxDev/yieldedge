'use client';

import dynamic from 'next/dynamic';
import Container from '@/components/ui/Container';

const DiagnosisForm = dynamic(() => import('@/components/DiagnosisForm'), {
  loading: () => <div className="min-h-[600px] bg-[#1F5CFF] rounded-3xl animate-pulse" />,
});

export default function FinalCTANew() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="contact">
      <Container>
        <DiagnosisForm />
      </Container>
    </section>
  );
}
