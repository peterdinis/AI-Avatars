import "~/styles/globals.css";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/toaster";
import ThemeProvider from "./_components/shared/ThemeProvider";

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
          <ThemeProvider attribute={"class"}>
            {children}
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
