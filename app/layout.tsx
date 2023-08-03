import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import ParallaxProvider from "@/components/ParallaxProvider";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Rats",
  description: "Gym Rats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <ParallaxProvider>
        <body className={`${ubuntu.className} max-w-screen-2xl dark`}>
          <Header />
          {children}
          <Footer />
        </body>
      </ParallaxProvider>
    </html>
  );
}
