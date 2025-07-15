import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Bg from "./bg";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael - Personal Page",
  description: "Hey, my name is Michael!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="hyphones-auto">
      <body
        className={`mx-auto mt-[20px] mb-[40px] max-w-[60em]   md:pl-[0] ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Bg />
      </body>
    </html>
  );
}
