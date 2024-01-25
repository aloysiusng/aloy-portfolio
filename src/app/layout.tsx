import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Particles from "./components/particles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aloysius",
  description: "Aloysius' portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        <div className="overflow-hidden bg-gradient-to-tl from-black via-zinc-200/20 to-black">{children}</div>
      </body>
    </html>
  );
}
