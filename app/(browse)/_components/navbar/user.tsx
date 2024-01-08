import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const User = async () => {
  const signUser = await currentUser();
  return (
    <div>
      {!signUser && (
        <div className="flex items-center gap-x-4">
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant={"primary"}>Sign up</Button>
          </SignUpButton>
        </div>
      )}
      {!!signUser && (
        <div className="flex items-center gap-x-4">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${signUser.username}`}>
              <Clapperboard className="w-5 h-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default User;
