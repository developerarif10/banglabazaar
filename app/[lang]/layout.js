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
  description: "Modern e-commerce website built with developerarif",
};

export default function MainLayout({ children }) {
  return (
    <main className="suppressHydrationWarning">
      <div id="wrapper">
        <TopBar />
        <Header />
        {children}
        <Footer />
      </div>

      <GoToTop />
      <ToolbarBottom />
      <Modals />
    </main>
  );
}
