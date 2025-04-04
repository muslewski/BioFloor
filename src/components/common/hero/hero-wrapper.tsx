// takes 100 vh
// display beautifull image
// white blur on screen before text for better contrast
// with little fixed animation from framer motion

export function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative min-h-screen flex items-center">
      {children}
    </div>
  );
}
