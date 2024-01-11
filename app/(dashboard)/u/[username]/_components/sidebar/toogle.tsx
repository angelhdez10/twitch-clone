"use client";
import { useCreatorSideBar } from "@/app/store/use-sidebar-creator";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toogle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSideBar((s) => s);

  const label = collapsed ? "Expand" : "Close";
  return (
    <>
      {collapsed && (
        <div className="w-full hidden lg:flex items-center justify-center pt-2 m-4">
          <Hint label={label} side="right" asChild>
            <Button variant={"ghost"} onClick={onExpand} className="h-auto p-2">
              <ArrowRightFromLine className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
          <p className="font-semibold">Dashboard</p>
          <Hint label={label} side="right" asChild>
            <Button
              variant={"ghost"}
              onClick={onCollapse}
              className="h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toogle;
