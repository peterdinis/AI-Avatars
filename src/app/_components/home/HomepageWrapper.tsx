import { FC } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";

const HomepageWrapper: FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-slate-50 to-red-300"></div>
            <div className="container mx-auto">
                <header className="flex w-full max-w-screen-2xl justify-between bg-transparent py-10 px-10 mx-auto">
                    <div>
                        LOGO
                    </div>
                    <div>MENU</div>
                </header>
                <div className="m-10 flex flex-col items-center justify-center">
                    <div className="bg-clip-text text-center text-5xl font-semibold leading-snug">
                        <p>
                            Create your photorealistic
                            <span className="text-red-900 ml-3">AI</span>
                            <span className="ml-2">Avatars</span>
                        </p>
                    </div>
                    <div className="my-12 w-full px-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"default"} size={"lg"} className="w-full">
                                    Try now
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Complete authentification</DialogTitle>
                                    <DialogDescription>Two authentification flows are here</DialogDescription>
                                </DialogHeader>
                                <form className="flex flex-col space-y-4">
                                    <Input type={"text"} />
                                    <Button type="submit" className="w-full">Verify your email</Button>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageWrapper;
