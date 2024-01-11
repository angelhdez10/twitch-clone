import Navigation from "./navigation";
import Toogle from "./toogle";
import Wrapper from "./wrapper";

const SideBar = async () => {
  return (
    <Wrapper>
      <Toogle />
      <Navigation />
    </Wrapper>
  );
};

export default SideBar;
