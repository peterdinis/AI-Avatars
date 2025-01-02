"use client";

import { FC } from "react";
import { UploadButton } from "~/app/_utils/uploadthing";
import Navigation from "../shared/Navigation";

const DashboardWrapper: FC = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-slate-50 to-red-300"></div>
            <div className="container mx-auto">
                <Navigation />
                <div className="m-10 flex flex-col items-center justify-center">
                    <div className="bg-clip-text text-center text-5xl font-semibold leading-snug">
                        <p>Dashboard</p>
                    </div>
                    <main>
                        <UploadButton
                            className="rounded-xl border-dashed flex items-center justify-center"
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                // Handle successful upload
                                console.log("Files: ", res);
                                alert("Upload Completed");
                            }}
                            onUploadError={(error: Error) => {
                                // Handle upload error
                                alert(`ERROR! ${error.message}`);
                            }}
                        />
                    </main>
                </div>
                <div className="mt-20">
                    Displaying Images
                </div>
            </div>
        </div>
    );
};

export default DashboardWrapper;