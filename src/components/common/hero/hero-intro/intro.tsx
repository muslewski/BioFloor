// Component that will merge hero title with description and cta's or custom component like contact form or calculator

import { HeroDescription } from "@/components/common/hero/hero-intro/description";
import { HeroTitle } from "@/components/common/hero/hero-intro/title";
import { cn } from "@/lib/utils";

interface HeroIntroProps {
  title: string | React.ReactNode;
  titleLight?: string | React.ReactNode;
  titleDecorator?: React.ReactNode;
  description: string | React.ReactNode;
  ctaButtons?: React.ReactNode;
  customObject?: React.ReactNode;
  className?: string;
}

export function HeroIntro({
  title,
  titleLight,
  titleDecorator,
  description,
  ctaButtons,
  customObject,
  className,
}: HeroIntroProps) {
  return (
    <div className={cn("relative z-10", className)}>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <HeroTitle
              title={title}
              titleLight={titleLight}
              decorator={titleDecorator}
            />
            <HeroDescription description={description} />
          </div>

          {/* Display Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 relative z-10">
            {ctaButtons}
          </div>
        </div>
        {/* Calculator, Contact Form etc */}
        {customObject}
      </div>
    </div>
  );
}
