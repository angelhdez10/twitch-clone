"use client";
import { onFollowing } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { useTransition } from "react";

interface ActionsProps {
  isFollowing: boolean;
  userToFollow: User;
}

const Actions: React.FC<ActionsProps> = ({ isFollowing, userToFollow }) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollowing(userToFollow.id);
    });
  };
  return (
    <div>
      <Button
        onClick={onClick}
        variant={"primary"}
        disabled={isPending || isFollowing}
      >
        Follow
      </Button>
    </div>
  );
};

export default Actions;
