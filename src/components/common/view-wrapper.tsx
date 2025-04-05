// Boss Wraper that is used in every view

export function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-background">
      {children}
    </main>
  );
}
