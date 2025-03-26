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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " w-full"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Bg />
        </ThemeProvider>
      </body>
    </html>
  );
}
