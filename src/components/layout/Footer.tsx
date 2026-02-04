import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const services = [
    "Transmission Line",
    "Internet Connection",
    "Waste Water Treatment",
    "Access Point",
    "CCTV Installation",
    "Elevator Installation",
    "Electrical Systems",
    "Maintenance Contracts",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="MEP Electric Technology Ltd" 
              className="h-16 w-auto bg-white p-2 rounded-lg" 
            />
            <p className="text-sm opacity-90 leading-relaxed">
              Since 2016, delivering world-class MEP, technology, and infrastructure 
              solutions for residential, commercial, and industrial projects across 
              Rwanda and East Africa.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-mep-orange -mb-2"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-mep-orange transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-mep-orange rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-mep-orange -mb-2"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              {services.map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-mep-orange transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-mep-orange rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-mep-orange -mb-2"></span>
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-mep-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-mep-orange" />
                </div>
                <span className="text-sm opacity-90 leading-relaxed">
                  Remera – Gisimenti, Ikaze House F2-22, Kigali, Rwanda
                </span>
              </li>
              <li>
                <a 
                  href="tel:+250781175264" 
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 bg-mep-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-mep-orange" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-base">+250 781 175 264</p>
                    <p className="opacity-75">Mon - Fri, 8am - 5pm</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:meperictric40@gmail.com" 
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 bg-mep-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-mep-orange" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">meperictric40@gmail.com</p>
                    <p className="opacity-75">Send us an email</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Transmission-style Divider */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/30"></div>
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-mep-orange rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 h-2 bg-mep-orange rounded-full"></span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/30"></div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <p>© 2026 MEP Electric Technology Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-mep-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-mep-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
