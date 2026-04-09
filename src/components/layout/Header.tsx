import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
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
          ? "glass-nav shadow-2xl"
          : "bg-[#12356e]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-start py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="MEP Erictric Technology Ltd" className="h-12 w-auto rounded-lg" />
              <div className="absolute inset-0 rounded-lg bg-mep-orange/0 group-hover:bg-mep-orange/10 transition-colors duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-sm leading-none tracking-wide">MEP ERICTRIC</span>
              <span className="block text-white/50 text-[10px] tracking-widest uppercase">Technology Ltd</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-4 py-2 rounded-lg text-sm ${
                  location.pathname === link.path ? "active bg-white/5" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://claude.ai/public/artifacts/16323224-122e-4455-9272-efa6e71df1fe"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link px-4 py-2 rounded-lg text-sm"
            >
              MEP Calculator
            </a>
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
                href="https://claude.ai/public/artifacts/16323224-122e-4455-9272-efa6e71df1fe"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
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
