import { useSideBar } from "@/app/store/use-sidebar";
import LiveBadge from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}

const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const href = `/${username}`;
  const { collapsed } = useSideBar((s) => s);
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-10",
        collapsed ? "justify-center" : "justify-start",
        active && "bg-accent",
      )}
      h-15
    >
      <Link href={href}>
        <div
          className={cn(
            "flex items-center w-full gap-x-4",
            collapsed && "justify-center",
          )}
        >
          <UserAvatar username={username} image={imageUrl} isLive={isLive} />
          {!collapsed && <p className="truncate">{username}</p>}
          {!collapsed && isLive && <LiveBadge className="ml-auto" />}
        </div>
      </Link>
    </Button>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-5 px-3 py-2">
      <Skeleton className="min-h-8 min-w-8 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
export default UserItem;
