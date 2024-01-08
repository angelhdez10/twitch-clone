import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className="flex justify-between items-center gap-x-4 m-2 lg:m-0">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <Link href="/">
          <div className="bg-white rounded-full p-1">
            <Image src="/spooky.svg" height={32} width={32} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex hover:scale-105 transition ">
        <Link href="/discover">
          <p>Let's Explore</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
