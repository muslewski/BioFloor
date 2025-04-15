"use client";

import { SectionIntro } from "@/components/common/section/section-intro/intro";
import { SectionWrapper } from "@/components/common/section/section-wrapper";
import { AnimatedTestimonials } from "@/components/testimonials";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: (
        <>
          <p>Plusy:</p>
          <ul>
            <li>
              słabsze pylenie w porównaniu do słomy lub trocin co przekłada się
              na zdrowie i układ oddechowy kurcząt.
            </li>
            <li>
              mniejsze zużycie paszy - pisklak/kurczak lepiej rozpoznaje różnice
              pomiędzy ściółką a paszą co do minimum przekłada się na straty.
            </li>
            <li>
              higiena paszy w karmidłach oraz poidłach - przez grubość ściółki,
              ściółka nie dostaje się do poideł oraz karmideł jak jest w
              przypadku słomy lub trocin.
            </li>
          </ul>
        </>
      ),
      name: "Maksym Zięba",
      designation: " Właściciel, Hodowla Drobiu ",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <SectionWrapper>
      <SectionIntro
        title="Opinie naszych Klientów"
        description="Zadowoleni klienci to nasza najlepsza wizytówka - poznaj ich zdanie o BioFloor."
      />
      <AnimatedTestimonials testimonials={testimonials} />
    </SectionWrapper>
  );
}
