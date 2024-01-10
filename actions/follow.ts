"use server";

import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

export const onFollowing = async (id: string) => {
  try {
    const user = await getSelf();
    const userToFollow = await db.user.findUnique({
      where: {
        id,
      },
    });
    console.log(user, userToFollow);
  } catch (e) {
    throw new Error("Internal Error");
  }
};
