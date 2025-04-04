// Similiar to hero wrapper but without images just white background and animation for PodŁapki product

export function HomepageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative max-h-screen min-h-screen flex items-center px-6 sm:px-24 3xl:px-44">
      {children}
    </div>
  );
}
