import { FC } from "react";
import { Button } from "~/components/ui/button";

const HomepageWrapper: FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="container mx-auto">
            <header className="flex w-full justify-between py-4 px-10">
                <div>
                    LOGO
                </div>
                <div>MENU</div>
            </header>
           <div className="m-10 flex flex-col items-center justify-center">
                <div className="bg-transparent bg-gradient-to-tr from-red-900 via-slate-500 to-red-300 bg-clip-text text-center text-6xl font-semibold leading-snug">
                    <p>Create your own</p>{" "}
                    <p className="">
                        photorealistic <span className="text-red-800">AI</span> Avatars
                    </p>
                </div>
                <div className="my-12">
                    <Button variant={"default"} size={"lg"}>
                        Create your own AI Avatars now
                    </Button>
                </div>
           </div>
        </div>
    </div>
  );
};

export default HomepageWrapper;
