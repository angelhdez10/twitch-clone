import Container from "./_components/container";
import Navbar from "./_components/navbar";
import SideBar from "./_components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="h-full pt-20 flex">
        <SideBar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;