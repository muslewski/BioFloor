export function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-background px-6 sm:px-24 3xl:px-44">
      {children}
    </main>
  );
}
