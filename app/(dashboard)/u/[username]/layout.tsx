import Navbar from "./_components/navbar";
import { getSelfByUserName } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import SideBar from "./_components/sidebar";
import Container from "./_components/container";

interface CreatorLayoutProps {
  children: React.ReactNode;
  params: { username: string };
}

const CreatorLayout: React.FC<CreatorLayoutProps> = async ({
  children,
  params,
}) => {
  const self = await getSelfByUserName(params.username);
  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />

      <div className="flex h-full pt-20">
        <SideBar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
