import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const LogoComponent = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="twitch-clone" height={72} width={72} />
      </div>
      <div className="flex flex-col items-center">
        <p className={cn("text-xl font-semibold", font.className)}>
          Twitch-clone
        </p>
        <p className={cn("text-sm text-muted-foreground", font.className)}>
          Press enter to play
        </p>
      </div>
    </div>
  );
};

export default LogoComponent;
