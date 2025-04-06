// wrapper that have something like grid and prop to select how many columns we want and gap-96px

import { cn } from "@/lib/utils";

interface CardWrapperProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function CardWrapper({ children, columns = 3 }: CardWrapperProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={cn("grid gap-12 sm:gap-24", columnClasses[columns])}>
      {children}
    </div>
  );
}
