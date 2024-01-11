import Wrapper from "./wrapper";
import Toogle from "./toogle";
import Recommended, { RecommendedSkeleton } from "./recommended";
import { getRecommendedService } from "@/lib/recommend-service";
import { getFollowedUsers } from "@/lib/follow-service";
import Following, { FollowingSkeleton } from "./followed";

const SideBar = async () => {
  const recommended = await getRecommendedService();
  const followed = await getFollowedUsers();
  return (
    <Wrapper>
      <Toogle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={followed} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SideBarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-14 lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

export default SideBar;
