import { ReactNode } from "react";
import { FileText } from "lucide-react";
import TopInfoBar from "./TopInfoBar";
import Header from "./Header";
import Footer from "./Footer";
import WelcomePopup from "./WelcomePopup";
import SocialSidebar from "./SocialSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomePopup />
      <WhatsAppButton />
      <SocialSidebar />
      <TopInfoBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Fixed Company Profile button - bottom left */}
      <a
        href="https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[90] inline-flex items-center gap-2 bg-primary border border-white/20 text-white font-medium px-4 py-3 rounded-xl text-sm hover:bg-primary/80 transition-all duration-300 shadow-lg"
      >
        <FileText className="h-4 w-4" />
        Company Profile
      </a>
    </div>
  );
};

export default Layout;
