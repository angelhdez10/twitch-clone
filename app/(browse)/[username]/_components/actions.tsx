"use client";
import { onBlock, onUnBlock } from "@/actions/block";
import { onFollowing, onUnfollowUser } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { unBlockUser } from "@/lib/block-service";
import { unFollowUser } from "@/lib/follow-service";
import { User } from "@prisma/client";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  followUserId: string;
  isBlocked: boolean;
}

const Actions: React.FC<ActionsProps> = ({
  isFollowing,
  followUserId,
  isBlocked,
}) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollowing(followUserId)
        .then((data) =>
          toast.success(`${data.following.username} is now followed`),
        )
        .catch((e) => toast.error(`${e}`));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollowUser(followUserId)
        .then((data) =>
          toast.success(`${data.following.username} is now followed`),
        )
        .catch((e) => toast.error(`${e}`));
    });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(followUserId)
        .then((data) => {
          toast.success(`You have block the user ${data?.blocked.username}`);
        })
        .catch((e) => toast.error(`${e}`));
    });
  };
  const handleUnBlock = () => {
    startTransition(() => {
      onUnBlock(followUserId)
        .then((data) => {
          toast.success(`You have unblock the user ${data?.blocked.username}`);
        })
        .catch((e) => toast.error(`${e}`));
    });
  };

  const onClickBlock = () => {
    if (isBlocked) {
      handleUnBlock();
    } else {
      handleBlock();
    }
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };
  return (
    <div>
      <Button onClick={onClick} variant={"primary"} disabled={isPending}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button onClick={handleBlock}>{"Block"}</Button>
    </div>
  );
};

export default Actions;
