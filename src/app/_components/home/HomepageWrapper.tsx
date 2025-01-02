"use client";

import { FC, useState } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { FaGoogle } from "react-icons/fa";
import Navigation from "../shared/Navigation";

const HomepageWrapper: FC = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-slate-50 to-red-300"></div>
            <div className="container mx-auto">
                <Navigation />
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
                                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
                                    <Input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type={"email"}
                                        required
                                        placeholder="john@doe.com"
                                    />
                                    <Button type="submit" className="w-full">Verify your email</Button>
                                </form>
                                <p className="w-full text-center font-bold">OR</p>
                                <Button className="mr-2" variant={"secondary"} size={"sm"}>
                                    <FaGoogle /> Login
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageWrapper;