import Image from "next/image";
import LogoComponent from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-full">
      <LogoComponent />
      {children}
    </div>
  );
};

export default AuthLayout;
