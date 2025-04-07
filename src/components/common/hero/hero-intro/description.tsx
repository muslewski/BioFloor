// description with some dope animation maybe from react bits

interface HeroDescriptionProps {
  description: string | React.ReactNode;
}

export function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <p className="text-shadow-white text-shadow-lg/30 drop-shadow-2xl drop-shadow-white">
      {description}
    </p>
  );
}
