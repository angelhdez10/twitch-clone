import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";
import { Clapperboard, LogOut } from "lucide-react";
import Link from "next/link";

const User = async () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button
        variant={"ghost"}
        className="text-muted-foreground hover:text-primary"
        size={"sm"}
        asChild
      >
        <Link href={"/"} className="gap-x-2">
          Exit
          <LogOut className="h-5 w-5 mr-2" />
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default User;
