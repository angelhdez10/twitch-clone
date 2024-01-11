"use client";
import { useCreatorSideBar } from "@/app/store/use-sidebar-creator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { collapsed } = useCreatorSideBar((s) => s);
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col items-center h-full w-14 lg:w-60 bg-background border-r border-[#2D2E35] z-50",
        collapsed && "lg:w-14",
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
