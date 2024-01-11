import { useCreatorSideBar } from "@/app/store/use-sidebar-creator";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon: Icon,
  label,
  isActive,
}) => {
  const { collapsed } = useCreatorSideBar((s) => s);
  return (
    <Button
      className={cn(
        "w-full h-12",
        isActive && "bg-accent",
        collapsed ? "justify-center" : "justify-start",
      )}
      variant={"ghost"}
      asChild
    >
      <Link href={href}>
        <div className="flex items-center gap-x-4">
          <Icon className={cn(" h-5 w-5", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
};

export const NavItemSkeleton = () => {
  return (
    <li className="flex items-center justify-center px-3 py-2">
      <Skeleton className="min-h-12 min-w-12 rounded-md" />
      <div className="flex-1 hidden lg:flex">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};

export default NavItem;
