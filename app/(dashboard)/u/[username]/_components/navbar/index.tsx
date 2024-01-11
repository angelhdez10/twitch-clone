import Logo from "./logo";
import User from "./user";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-md">
      <Logo />
      <User />
    </nav>
  );
};

export default Navbar;
