import { ReactNode } from "react";
import { FileText, Mail, Phone, MapPin } from "lucide-react";
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
      <SocialSidebar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Fixed contact card + Company Profile button - bottom left */}
      <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-2">
        <div className="bg-[#0A0A0F]/95 backdrop-blur-xl border border-white/10 text-white/80 text-xs rounded-xl p-3 shadow-lg max-w-[260px] hidden sm:flex flex-col gap-2">
          <a
            href="https://maps.app.goo.gl/UMiHCVPAyGDR3C9B6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>&nbsp;Kigali,Remera, Gisimenti</span>
          </a>
          <a
            href="tel:+250788645567"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <span>+25078-864-5567</span>
          </a>
          <a
            href="mailto:info@meperictrictech.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" />
            <span>info@meperictrictech.com</span>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary border border-white/20 text-white font-medium px-4 py-3 rounded-xl text-sm hover:bg-primary/80 transition-all duration-300 shadow-lg w-fit"
        >
          <FileText className="h-4 w-4" />
          Company Profile
        </a>
      </div>
    </div>
  );
};

export default Layout;
