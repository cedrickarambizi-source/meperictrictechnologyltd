import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <img src={logo} alt="MEP Erictric Technology Ltd" className="h-12 w-auto rounded-lg" />
              <div className="absolute inset-0 rounded-lg bg-mep-orange/0 group-hover:bg-mep-orange/10 transition-colors duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-sm leading-none tracking-wide">MEP ERICTRIC</span>
              <span className="block text-white/50 text-[10px] tracking-[0.2em] uppercase mt-1">Technology Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation - Bain-style minimal */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] tracking-wide font-normal transition-colors duration-200 pb-1 ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-mep-orange transition-all duration-300 ${
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
              className="text-[13px] tracking-wide text-white/70 hover:text-white transition-colors duration-200"
            >
              MEP Calculator
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center border border-white/40 text-white text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 hover:bg-white hover:text-[#0A0A0F] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-mep-orange text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5"
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
                className="px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                MEP Calculator
              </a>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 mx-4 inline-flex items-center justify-center border border-white/40 text-white text-xs tracking-[0.18em] uppercase px-5 py-3 hover:bg-white hover:text-[#0A0A0F] transition-all"
            >
              Get a Quote
            </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
