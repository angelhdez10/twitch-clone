import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import Actions from "./_components/actions";

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

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      User page: {params.username} {JSON.stringify(isFollowing)}
      <Actions isFollowing={isFollowing} userToFollow={user} />
    </div>
  );
};

export default UserPage;
