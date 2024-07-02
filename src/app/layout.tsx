import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        {/* @ts-ignore */}
        <NavBar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
