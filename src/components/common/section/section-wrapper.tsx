// component that accept children and have proper padding and maybe something like optional border bottom for great horizontal line
// for mobile proper padding-y

// optional backgroundImage that will have effect fixed with framer motion
// if backgroundImage is passed than we also need to have this white blurred glow for better contrast

export function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative flex justify-center">
      <div className="w-full px-6 sm:px-24 3xl:px-44">{children}</div>
    </div>
  );
}
