import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/data/mockData";
import logo from "@assets/image_1765267467250.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Socials - Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logo} alt="Bidya Bandana" className="h-28 w-28 object-contain" />
            <span className="text-sm font-serif font-bold text-center md:text-left">Bidya Bandana</span>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/15 hover:bg-white/25 p-2 rounded-full transition-colors text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg">Explore</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Admissions", "Study Materials", "Notices", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>
                    <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {["Admissions", "Study Materials", "Notices", "Contact", "About Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                    <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-white/80 leading-snug">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/80 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Bidya Bandana Concept School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
