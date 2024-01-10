"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSideBar((state) => state);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col h-full w-14 lg:w-60 z-50 bg-background border-r border-[#2D2E35]">
        <RecommendedSkeleton />
      </aside>
    );
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col h-full w-60 z-50 bg-background border-r border-[#2D2E35]",
        collapsed && "w-14",
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
