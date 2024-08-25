import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Montserrat } from "next/font/google";
import BottomNav from "./components/BottomNav/BottomNav";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prueba Técnica Frontend Developer - Demo",
  description:
    "Prueba técnica para el puesto de Frontend Developer en la empresa PulpoLine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <div
          className="hidden md:block absolute top-0 bottom-0 z-[-2] h-92  w-full bg-[radial-gradient(ellipse_50%_100%_at_-20%_20%,rgba(60,66,213,15%),rgba(255,255,255,0))]"
          data-astro-source-file="/home/webzma/dev/myProjects/webzma.dev/src/layouts/Layout.astro"
          data-astro-source-loc="35:4"
        ></div>
        {children}
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
