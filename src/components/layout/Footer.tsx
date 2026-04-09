import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Youtube, Clock, Globe } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="text-white relative bg-[#12356e]">
      {/* Orange glow line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-mep-orange/60 to-transparent" />

      <div className="container mx-auto px-4 py-16 lg:py-20 bg-[#12356e]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="MEP Erictric Technology Ltd" loading="lazy" className="h-14 w-auto rounded-lg" />
              <div>
                <span className="font-bold text-sm leading-none">MEP ERICTRIC</span>
                <span className="block text-white/40 text-[10px] tracking-widest uppercase">Technology Ltd</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed border-[#dc1e1e]">
              Engineering excellence across East Africa since 2016. Delivering world-class MEP solutions for commercial, industrial, and government projects.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://x.com/MEPerictrictech", label: "X", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { href: "https://www.instagram.com/meperictrictechnologyltd/?hl=en", label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
                { href: "https://www.youtube.com/@MepErictric", label: "YouTube", icon: <Youtube className="h-4 w-4" /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-mep-orange/20 hover:border-mep-orange/30 hover:text-mep-orange hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Our Projects", path: "/projects" },
                { name: "Our Team", path: "/team" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/40 hover:text-mep-orange transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-mep-orange/50 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Electrical Engineering",
                "Mechanical Systems",
                "Plumbing Solutions",
                "Elevator Installation",
                "Solar Energy",
                "Power Backup Systems",
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/40 hover:text-mep-orange transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-mep-orange/50 rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-primary-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm">, Kigali, Rwanda</span>
              </li>
              <li>
                <a href="tel:+250788645567" className="flex items-start gap-3 hover:text-mep-orange transition-colors">
                  <Phone className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm">+250 788 645 567</span>
                </a>
              </li>
              <li>
                <a href="tel:+250781175264" className="flex items-start gap-3 hover:text-mep-orange transition-colors">
                  <Phone className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm">+250 781 175 264</span>
                </a>
              </li>
              <li>
                <a href="mailto:meperictric40@gmail.com" className="flex items-start gap-3 hover:text-mep-orange transition-colors">
                  <Mail className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm">meperictric40@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm">meperictictech.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm">Mon–Fri: 8AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Orange divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-mep-orange/30 to-transparent" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 MEP Erictric Technology Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-mep-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-mep-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center pb-5">
        <div className="flex items-center justify-center gap-2.5">
          <p className="text-[11px] text-white/20">Created by Cedric Karambizi</p>
          <a
            href="https://digital-genesis-navy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-mep-orange/20 text-mep-orange text-[10px] font-semibold hover:bg-mep-orange/30 transition-colors"
          >
            Click
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
