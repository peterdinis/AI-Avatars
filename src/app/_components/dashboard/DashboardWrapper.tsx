"use client";

import { FC } from "react";
import { UploadButton } from "~/app/_utils/uploadthing";
import Navigation from "../shared/Navigation";
import DashboardUploadedImages from "./DashboardUploadedImages";

const DashboardWrapper: FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-fuchsia-200 via-slate-50 to-red-300 dark:from-purple-700 dark:via-gray-900 dark:to-red-600"></div>
      <div className="container mx-auto">
        <Navigation />
        <div className="m-10 flex flex-col items-center justify-center">
          <div className="bg-clip-text text-center text-5xl font-semibold leading-snug">
            <p>Dashboard</p>
          </div>
          <main>
            <UploadButton
              className="flex items-center justify-center rounded-xl border-dashed"
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
          <DashboardUploadedImages />
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
