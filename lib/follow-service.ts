import { getSelf } from "./auth-service";
import { db } from "./db";

export const isFollowingUser = async (id: string) => {
  try {
    const self = await getSelf();

    const otherUser = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (otherUser.id === self.id) {
      return true;
    }

    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: self.id,
        followingId: otherUser.id,
      },
    });
    return !!isFollowing;
  } catch (e) {
    return false;
  }
};

const followUser = async (id: string) => {
  const self = await getSelf();

  const userToFollow = await db.user.findUnique({
    where: {
      id,
    },
  });
  if (!userToFollow) {
    throw new Error("User not Found");
  }

  if (userToFollow.id === self.id) {
    throw new Error("Cannot follow yourself");
  }

  const alreadyFollow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: userToFollow.id,
    },
  });

  if (alreadyFollow) {
    throw new Error("Already followed.");
  }

  const follow = await db.follow.create({
    data: {
      followerId: self.id,
      followingId: userToFollow.id,
    },
    include: {
      following: true,
      follower: true,
    },
  });

  return follow;
};
