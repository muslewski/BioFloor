// basically paragraph for section title h2.
// or list or some custom component
// it should be capable of proper responsiveness and maybe managing alignment of text, and in the future some framer motion

interface SectionDescriptionProps {
  children: React.ReactNode;
}

export function SectionDescription({ children }: SectionDescriptionProps) {
  return <p className="sm:text-center">{children}</p>;
}
