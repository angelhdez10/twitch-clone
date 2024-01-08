"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const Container = ({ children }: { children: React.ReactNode }) => {
  const lgScreen = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExpand } = useSideBar((state) => state);
  useEffect(() => {
    if (lgScreen) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [lgScreen, onExpand, onCollapse]);
  return (
    <div className={cn("flex", collapsed ? "ml-14" : "ml-14 lg:ml-60")}>
      {children}
    </div>
  );
};

export default Container;