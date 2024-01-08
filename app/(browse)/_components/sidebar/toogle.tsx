"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

const Toogle = () => {
  const { collapsed, onExpand, onCollapse } = useSideBar((state) => state);

  const label = collapsed ? "Expand" : "Close";
  return (
    <>
      {!collapsed && (
        <div className="flex justify-between items-center w-full p-3 pl-6 mb-2">
          <p className="font-bold text-primary">For you</p>
          <Hint label={label} asChild={true} side="right" align="end">
            <Button
              className="h-auto p-2 ml-auto"
              variant={"ghost"}
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      )}
      {collapsed && (
        <div className="hidden lg:flex justify-center items-center w-full pt-4 mb-4">
          <Hint label={label} asChild={true} side="right" align="end">
            <Button
              className="h-auto p-2 "
              variant={"ghost"}
              onClick={onExpand}
            >
              <ArrowRightFromLine className="h-5 w-5" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toogle;
