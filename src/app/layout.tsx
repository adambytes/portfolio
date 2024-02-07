import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Switch from "@/components/Switch";
import cn from "@/utils/cn";
import useLocalStorage from "@/hooks/useLocalStorage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Liang",
  description: "Adam Liang's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="dark">
        <div className="flex flex-col h-screen">
          <Switch className="mt-8 self-center" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
