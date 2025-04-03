"use client";

import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";

export function CallToAction({ text }: { text: string }) {
  return (
    <CoolMode options={{ particle: "/images/pellet.png" }}>
      <Button>{text}</Button>
    </CoolMode>
  );
}
