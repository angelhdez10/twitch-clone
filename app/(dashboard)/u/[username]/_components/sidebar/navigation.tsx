"use client";
import { useUser } from "@clerk/nextjs";
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react";
import NavItem, { NavItemSkeleton } from "./nav-item";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen,
    },
    {
      label: "keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound,
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare,
    },
    {
      label: "Community",
      href: `/u/${user?.username}/community`,
      icon: Users,
    },
  ];

  if (!user?.username) {
    return (
      <ul className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <NavItemSkeleton key={i} />
        ))}
      </ul>
    );
  }
  return (
    <ul className="w-full flex flex-col space-y-2 px-2 pt-4 lg:pt-0">
      {routes?.map((r) => (
        <NavItem
          key={r.href}
          href={r.href}
          label={r.label}
          icon={r.icon}
          isActive={pathname === r.href}
        />
      ))}
    </ul>
  );
};

export default Navigation;
