import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/data/mockData";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          {/* Brand & Socials - Left Column */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="h-40 w-40 rounded-full bg-white/10 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary text-white p-4 rounded-xl mb-2">
                  <GraduationCap size={40} />
                </div>
                <span className="text-lg font-serif font-bold text-center">Bidya Bandana</span>
              </div>
            </div>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/15 hover:bg-white/25 p-3 rounded-full transition-colors text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-8">
            <h3 className="font-serif font-bold text-2xl">Explore</h3>
            <ul className="space-y-4">
              {["About Us", "Admissions", "Study Materials", "Notices", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>
                    <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-8">
            <h3 className="font-serif font-bold text-2xl">Useful Links</h3>
            <ul className="space-y-4">
              {["Admissions", "Study Materials", "Notices", "Contact", "About Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <h3 className="font-serif font-bold text-2xl">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="mt-1 shrink-0 text-accent" />
                <p className="text-white/80 leading-relaxed text-sm">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="shrink-0 text-accent" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="shrink-0 text-accent" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white/80 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
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
