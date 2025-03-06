import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ToolbarBottom from "@/components/common/ToolbarBottom";
import TopBar from "@/components/common/TopBar";
import Modals from "@/components/modals/Modals";
import GoToTop from "@/components/ui/GoToTop";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecomus - Ultimate Next.js E-commerce",
  description: "Modern e-commerce website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo/favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/logo/favicon.png"
        />
      </head>
      <body className={`${inter.className} preload-wrapper`}>
        <div id="wrapper">
          <TopBar />
          <Header />
          {children}
          <Footer />
        </div>

        <GoToTop />
        <ToolbarBottom />
        <Modals />
      </body>
    </html>
  );
}
