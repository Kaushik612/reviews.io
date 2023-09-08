import "./globals.css";
import type { Metadata } from "next";

import { Urbanist, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navigation/Navbar";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { currentUser } from "@clerk/nextjs";
import GooglePlacesScript from "@/components/google/GooglePlacesScript";

const urbanist = Urbanist({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reviews.io - Share reviews about your favorite restaurants",
  description: "Share reviews about your favorite restaurants",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <GooglePlacesScript />
            <main className="max-w-7xl mx-auto ">
              <Navbar userId={user?.id} />
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
