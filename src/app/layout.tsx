import "~/styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import {
  ClerkProvider,
} from '@clerk/nextjs'
export const metadata: Metadata = {
  title: "AI Avatars",
  description: "Generate your ai avatars here",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>
          <ClerkProvider>
          {children}
          <Toaster />
          </ClerkProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
