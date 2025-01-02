import { FC } from "react";
import { Button } from "~/components/ui/button";

const HomepageWrapper: FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="container">
            <header className="flex w-full justify-between py-4 px-10">
                <div>
                    LOGO
                </div>
                <div>MENU</div>
            </header>
            <div className="m-10 flex flex-col space-y-4">
                <h1 className="text-4xl font-bold">AI Avatars</h1>
                <Button variant={"default"} size={"lg"}>
                    Create your own AI Avatars now
                </Button>
            </div>
        </div>
    </div>
  );
};

export default HomepageWrapper;
