"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import { Follow, User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./useritem";

interface FollowingProps {
  data: (Follow & { following: User })[];
}
const Following: React.FC<FollowingProps> = ({ data }) => {
  const { collapsed } = useSideBar((s) => s);
  if (!data.length) {
    return null;
  }
  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-muted-foreground text-semibold">Following</p>
        </div>
      )}
      <ul className="space-x-2 px-2">
        {data.map((f) => (
          <UserItem
            key={f.id}
            imageUrl={f.following.imageUrl}
            username={f.following.username}
            isLive={false}
          />
        ))}
      </ul>
    </div>
  );
};

export const FollowingSkeleton = () => {
  return <ul>{[...Array(3)]?.map((_, i) => <UserItemSkeleton key={i} />)}</ul>;
};

export default Following;
