"use client"

import { FC} from "react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";

const DashboardWarpper: FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-slate-50 to-red-300"></div>
            <div className="container mx-auto">
                <header className="flex w-full max-w-screen-2xl justify-between bg-transparent py-10 px-10 mx-auto">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <span>Avatars</span>
                    </div>
                    <div>Menu</div>
                </header>
                <div className="m-10 flex flex-col items-center justify-center">
                    <div className="bg-clip-text text-center text-5xl font-semibold leading-snug">
                        <p>
                            Dashboard
                        </p>
                    </div>
                    <div className="mt-10">
                        Uploader
                    </div>
                </div>
                <div className="mt-20">
                    Displaying Images
                </div>
            </div>
        </div>
    );
};

export default DashboardWarpper;