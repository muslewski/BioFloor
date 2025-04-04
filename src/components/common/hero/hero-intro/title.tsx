// H1 and optionall H1-Light after h1 from new line and of course framer motion in the future
// Optional absolute object like green line

interface HeroTitleProps {
  title: string;
  /** h1 that will be lighter and smaller */
  titleLight?: string;
  /** absolute object like green wavy line*/
  decorator?: React.ReactNode;
}

export function HeroTitle({ title, titleLight, decorator }: HeroTitleProps) {
  return (
    <h1 className="relative">
      {title} <br />
      {titleLight && <span className="h1-light">{titleLight}</span>}
      {decorator}
    </h1>
  );
}
