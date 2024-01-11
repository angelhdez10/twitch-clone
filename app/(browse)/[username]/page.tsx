import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import Actions from "./_components/actions";
import { isBlockedBy } from "@/lib/block-service";

const UserPage = async ({
  params,
}: {
  params: {
    username: string;
  };
}) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }

  const isBlocked = await isBlockedBy(user.id);

  if (isBlocked) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      User page: {params.username} {JSON.stringify(isFollowing)}
      <Actions
        isBlocked={isBlocked}
        isFollowing={isFollowing}
        followUserId={user.id}
      />
    </div>
  );
};

export default UserPage;
