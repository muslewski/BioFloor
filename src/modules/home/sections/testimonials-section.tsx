"use client";

import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { AnimatedTestimonials } from "@/components/testimonials";

export function TestimonialsSection(p: {
  testimonialsSectionTitle: string;
  testimonialsSectionDescription: string;
  quote1: React.ReactNode;
  designation1: string;
}) {
  const testimonials = [
    {
      quote: <>{p.quote1}</>,
      name: "Maksym Zięba",
      designation: p.designation1,
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <SectionWrapper>
      <SectionIntro
        title={p.testimonialsSectionTitle}
        description={p.testimonialsSectionDescription}
      />
      <AnimatedTestimonials testimonials={testimonials} />
    </SectionWrapper>
  );
}
