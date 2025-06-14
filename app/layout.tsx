import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans"; // import font
import "./globals.css";
import ProviderWrapper from "@/context/ProviderWrapper";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Dashboard",
  description: "Author: Jeff Hsiao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased dark:bg-gray-950`}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col ml-28">
          <Header />
          <ProviderWrapper>
            <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
              {children}
            </div>
          </ProviderWrapper>
        </main>
      </body>
    </html>
  );
}
