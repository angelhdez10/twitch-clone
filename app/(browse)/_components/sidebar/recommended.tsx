"use client";
import { useSideBar } from "@/app/store/use-sidebar";
import { User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./useritem";

interface RecommendedProps {
  data: User[];
}

const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSideBar((state) => state);
  if (!data?.length) {
    return null;
  }
  return (
    <div className="">
      {!collapsed && data.length > 0 && (
        <div className="pl-6 mb-4">
          <p className="text-muted-foreground text-semibold">Recommended</p>
        </div>
      )}
      <ul className="px-2">
        {data.map((u) => {
          return (
            <UserItem
              key={u.id}
              username={u.username}
              imageUrl={u.imageUrl}
              isLive={false}
            />
          );
        })}
      </ul>
    </div>
  );
};

export const RecommendedSkeleton = () => {
  return (
    <div>
      <ul>
        {[...Array(3)].map((_, i) => (
          <UserItemSkeleton key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Recommended;
