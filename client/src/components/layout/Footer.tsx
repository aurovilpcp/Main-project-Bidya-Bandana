import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/data/mockData";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">
                  Bidya Bandana
                </span>
                <span className="text-xs text-white/60 font-medium tracking-wide">
                  Concept School
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering students with knowledge, discipline, and values. 
              Premier coaching for NEET, JEE, and CBSE XI-XII.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {["About Us", "Admissions", "Study Materials", "Notices", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>
                    <a className="hover:text-white transition-colors hover:translate-x-1 inline-block transform">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-accent" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-accent" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Visual Only) */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get updates on admissions and events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-accent w-full"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-bold hover:bg-accent/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
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
