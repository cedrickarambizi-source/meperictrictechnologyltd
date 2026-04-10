import { ReactNode } from "react";
import TopInfoBar from "./TopInfoBar";
import Header from "./Header";
import Footer from "./Footer";
import WelcomePopup from "./WelcomePopup";
import WhatsAppButton from "./WhatsAppButton";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomePopup />
      <WhatsAppButton />
      
      <TopInfoBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
