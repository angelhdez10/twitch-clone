import { useSideBar } from "@/app/store/use-sidebar";
import Wrapper from "./wrapper";
import Toogle from "./toogle";

const SideBar = () => {
  return (
    <Wrapper>
      <Toogle />
    </Wrapper>
  );
};

export default SideBar;
