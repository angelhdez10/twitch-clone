import Wrapper from "./wrapper";
import Toogle from "./toogle";
import Recommended, { RecommendedSkeleton } from "./recommended";
import { getRecommendedService } from "@/lib/recommend-service";

const SideBar = async () => {
  const recommended = await getRecommendedService();
  return (
    <Wrapper>
      <Toogle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export const SideBarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-14 lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <RecommendedSkeleton />
    </aside>
  );
};

export default SideBar;
