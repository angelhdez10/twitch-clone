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
  console.log(self);
  const result = await db.user.findMany({
    where: {
      AND: [
        {
          NOT: {
            externalUserId: self?.externalUserId,
          },
        },
        {
          NOT: {
            followed: {
              some: {
                followerId: self?.id || "",
              },
            },
          },
        },
        {
          NOT: {
            blocking: {
              some: {
                blockedId: self?.id || "",
              },
            },
          },
        },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};
