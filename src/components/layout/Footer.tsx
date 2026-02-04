import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 bg-[#414248]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="MEP Electric Technology Ltd" className="h-16 w-auto bg-white p-2 rounded" />
            <p className="text-sm opacity-90 leading-relaxed">
              Since 2016, delivering world-class MEP and elevator solutions for residential, 
              commercial, and industrial projects across Rwanda and East Africa.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects", "Contact"].map(item => <li key={item}>
                  <Link to={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "-")}`} className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["Elevator Installation", "Electrical Engineering", "Mechanical Systems", "Plumbing Solutions", "Maintenance Contracts"].map(item => <li key={item}>
                  <Link to="/services" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Remera – Gisimenti, Ikaze House F2-22, Kigali, Rwanda
                </span>
              </li>
              <li>
                <a href="tel:+250788123456" className="flex items-center gap-3 hover:opacity-80">  
+250 788 123 456 +250 781 175 264<Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">+250 788 123 456
+250 781  175  264     
                </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@mepelectric.rw" className="flex items-center gap-3 hover:opacity-80">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">info@mepelectric.rw</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
            <p>© 2026 MEP Erictric Technology Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;