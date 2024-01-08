"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useSideBar((state) => state);
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
