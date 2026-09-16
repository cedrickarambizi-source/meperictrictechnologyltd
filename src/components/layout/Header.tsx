import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "FUJIHD Elevator", path: "/fujihd-elevator" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3">
      <div className={`mx-auto max-w-[1200px] rounded-full border border-white/10 bg-foreground/95 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "shadow-[0_2px_0_hsl(var(--border)/0.35)]" : ""}`}>
        <div className="flex items-center justify-between px-4 py-2.5 lg:px-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img src={logo} alt="MEP Erictric Technology Ltd" className="h-10 w-auto rounded-[7.5px]" />
            </div>
            <div className="hidden sm:block">
              <span className="text-primary-foreground font-bold text-sm leading-none">MEP ERICTRIC</span>
              <span className="block text-primary-foreground/50 text-[11px] font-mono uppercase mt-1">Technology Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation - Bain-style minimal */}
          <nav className="hidden lg:flex items-center gap-[19px]">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] font-normal transition-colors duration-200 ${
                    active ? "text-primary-foreground" : "text-primary-foreground/65 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1.5 h-px bg-primary-foreground transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
            <a
              href="https://mepestimatecalculator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-primary-foreground/65 hover:text-primary-foreground transition-colors duration-200"
            >
              MEP Calculator
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden px-2 pb-3 pt-2 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                   className={`px-4 py-2.5 rounded-full text-sm transition-all ${
                    location.pathname === link.path
                       ? "bg-primary-foreground/10 text-primary-foreground"
                       : "text-primary-foreground/65 hover:text-primary-foreground hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://mepestimatecalculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-full text-sm text-primary-foreground/65 hover:text-primary-foreground hover:bg-primary-foreground/5 transition-all"
              >
                MEP Calculator
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
