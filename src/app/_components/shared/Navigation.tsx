"use client";

import { FC } from "react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import ModeToggle from "./ModeToggle";

const Navigation: FC = () => {
    return (
        <header className="flex w-full max-w-screen-2xl justify-between bg-transparent py-10 px-10 mx-auto">
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