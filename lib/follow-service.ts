import { getSelf } from "./auth-service";
import { isBlockedBy } from "./block-service";
import { db } from "./db";

//Return true or false if the logged user follow a user, it recives the id of the user to check if its followed. This method only works on server side
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

//Follow user by an id. This method only works on server side
export const followUser = async (id: string) => {
  const userBlock = await isBlockedBy(id);
  if (userBlock) {
    throw new Error("This user its blocked by you");
  }
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

//Unfollow User by an id. This method only works on server side

export const unFollowUser = async (id: string) => {
  const self = await getSelf();

  const userToUnfollow = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!userToUnfollow) {
    throw new Error("User not found");
  }

  if (userToUnfollow.id === self.id) {
    throw new Error("You cannot unfollow yourself");
  }

  const follow = await db.follow.findFirst({
    where: {
      followerId: self.id,
      followingId: userToUnfollow.id,
    },
  });

  if (!follow) {
    throw new Error("No exists this follow");
  }

  const followDeleted = await db.follow.delete({
    where: {
      id: follow.id,
    },
    include: {
      following: true,
    },
  });

  return followDeleted;
};

//Get users followed by an user. This method only works on server side
export const getFollowedUsers = async () => {
  try {
    const self = await getSelf();
    const userFollowed = db.follow.findMany({
      where: {
        followerId: self.id,
        following: {
          blocking: {
            none: {
              blockedId: self.id,
            },
          },
        },
      },
      include: {
        following: true,
      },
    });
    return userFollowed;
  } catch (e) {
    return [];
  }
};
