import { ReactNode } from "react";

// These tags are available
type Tag = "p" | "b" | "i" | "li" | "br" | "ul";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        p: (chunks: ReactNode) => <p>{chunks}</p>,
        b: (chunks: ReactNode) => <b className="font-semibold">{chunks}</b>,
        i: (chunks: ReactNode) => <i className="italic">{chunks}</i>,
        li: (chunks: ReactNode) => <li>{chunks}</li>,
        ul: (chunks: ReactNode) => (
          <ul className="list-disc pl-5 space-y-1">{chunks}</ul>
        ),
        br: () => <br />,
      })}
    </>
  );
}
