"use server";
import { blockUser, unBlockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  try {
    const block = await blockUser(id);
    revalidatePath("/");
    if (!!block) {
      revalidatePath(`/${block.blocked.username}`);
    }
    return block;
  } catch (e) {}
};

export const onUnBlock = async (id: string) => {
  try {
    const unblocked = await unBlockUser(id);
    revalidatePath("/");
    if (!!unblocked) {
      revalidatePath(`/${unblocked.blocked.username}`);
    }
    return unblocked;
  } catch (e) {
    console.log(e);
  }
};
