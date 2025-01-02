import { FC } from "react";
import { Button } from "~/components/ui/button";

const HomepageWrapper: FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <header className="flex w-full justify-between p-4 px-10">
        <div>
            LOGO
        </div>
        <div>
            MENU
        </div>
      </header>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">Generate AI Avatars</h1>
        <Button variant={"default"} size={"lg"}>
          Create own avatar right now
        </Button>
      </div>
    </div>
  );
};

export default HomepageWrapper;
