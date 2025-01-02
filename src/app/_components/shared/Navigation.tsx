"use client";

import { FC } from "react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import ModeToggle from "./ModeToggle";

const Navigation: FC = () => {
  return (
    <header className="mx-auto flex w-full max-w-screen-2xl justify-between bg-transparent px-10 py-10">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <span>Avatars</span>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Navigation;
