// description with some dope animation maybe from react bits

interface HeroDescriptionProps {
  description: string | React.ReactNode;
}

export function HeroDescription({ description }: HeroDescriptionProps) {
  return <p>{description}</p>;
}
