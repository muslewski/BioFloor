// basically h2, title for sections, maybe some dope animation and optionall ability to have h2-light after h2 text from new line

interface SectionTitleProps {
  title: string;
  /** h2 that will be lighter and smaller */
  titleLight?: string;
  /** absolute object like green wavy line*/
  decorator?: React.ReactNode;
}

export function SectionTitle({
  title,
  titleLight,
  decorator,
}: SectionTitleProps) {
  return (
    <h2 className="relative sm:text-center">
      {title} <br />
      {titleLight && <span className="h2-light">{titleLight}</span>}
      {decorator}
    </h2>
  );
}
