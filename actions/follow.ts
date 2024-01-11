"use server";

import { followUser, unFollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollowing = async (id: string) => {
  try {
    const followed = await followUser(id);
    revalidatePath("/");
    if (followed) {
      revalidatePath(`/${followed.following.username}`);
    }

    return followed;
  } catch (e) {
    throw new Error("Internal Error");
  }
};

export const onUnfollowUser = async (id: string) => {
  try {
    const unfollowedUser = await unFollowUser(id);
    revalidatePath("/");
    if (unfollowedUser) {
      revalidatePath(`/${unfollowedUser.following.username}`);
    }

    return unfollowedUser;
  } catch (e) {
    throw new Error("Internal Error");
  }
};
