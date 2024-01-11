import { getSelf } from "./auth-service";
import { db } from "./db";

export const blockedUsers = () => {
  return;
};

export const isBlockedBy = async (id: string) => {
  try {
    const self = await getSelf();
    const userBlocked = await db.user.findUnique({
      where: { id },
    });
    if (!userBlocked) {
      throw new Error("User not found");
    }
    if (self.id === userBlocked.id) {
      return false;
    }

    const block = await db.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: userBlocked.id,
          blockedId: self.id,
        },
      },
    });

    return !!block;
  } catch (e) {
    console.log(e);
    return false;
  }
};

//This function only works in server side. This block an user trough an id, it throw an error if this went wrong on something
export const blockUser = async (id: string) => {
  let self = await getSelf();
  console.log(self.id);

  const userToBlock = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!userToBlock) {
    throw new Error("Not user found");
  }

  if (userToBlock.id === self.id) {
    throw new Error("You cannot block yourself");
  }

  const existsBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: userToBlock.id,
      },
    },
  });
  if (existsBlock) {
    throw new Error("This block already exists");
  }

  const block = await db.block.create({
    data: {
      blockerId: self.id,
      blockedId: userToBlock.id,
    },
    include: {
      blocked: true,
      blocker: true,
    },
  });

  if (block) {
    const hasFollow = await db.follow.findFirst({
      where: {
        followingId: userToBlock.id,
        followerId: self.id,
      },
    });

    !!hasFollow &&
      (await db.follow.delete({
        where: {
          id: hasFollow.id,
        },
      }));
  }
  return block;
};

export const unBlockUser = async (id: string) => {
  const self = await getSelf();
  const unBlockUser = await db.user.findUnique({
    where: {
      id,
    },
  });

  if (!unBlockUser) {
    throw new Error("Not found user");
  }

  if (self.id === unBlockUser.id) {
    throw new Error("You cannot unblock yourself");
  }

  const existsBlock = await db.block.findUnique({
    where: {
      blockerId_blockedId: {
        blockerId: self.id,
        blockedId: unBlockUser.id,
      },
    },
  });

  if (!existsBlock) {
    throw new Error("This user was not blocked by you");
  }

  const unblocked = await db.block.delete({
    where: {
      id: existsBlock.id,
    },
    include: {
      blocked: true,
    },
  });

  return unblocked;
};
