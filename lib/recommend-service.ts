import { getSelf } from "./auth-service";
import { db } from "./db";

export const getRecommendedService = async () => {
  // await new Promise((r) => setTimeout(r, 500));
  let self = null;

  try {
    self = await getSelf();
  } catch (e) {
    console.log(e);
    self = {
      externalUserId: "",
    };
  }
  const result = await db.user.findMany({
    where: {
      NOT: {
        externalUserId: self?.externalUserId,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};
