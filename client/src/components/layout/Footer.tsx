import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/data/mockData";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                <GraduationCap size={40} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-none">
                  BNC
                </span>
                <span className="text-xs text-white/50 font-medium tracking-widest">
                  School
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed hidden md:block">
              Empowering students with knowledge, discipline, and values.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-8 text-white">Explore</h3>
            <ul className="space-y-4">
              {["About Us", "Upcoming Events", "Blog & News", "FAQ Question", "Testimonial", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                    <a className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium group">
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-8 text-white">Useful Links</h3>
            <ul className="space-y-4">
              {["Contact Us", "Pricing Plan", "Gallery", "Instructor", "Purchase Guide", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium group">
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
                <div className="flex-1">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Durga Mandap, Near apejay school, Near Hill view residency, Khandagiri - Chandalka Rd. Ghatkia, Bhubaneswar
                  </p>
                </div>
              </div>
              <div className="space-y-3 ml-8">
                <a href="tel:+919776280828" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                  <Phone size={14} className="text-accent" />
                  +91 9776-280-828
                </a>
                <a href="tel:+919776654605" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                  <Phone size={14} className="text-accent" />
                  +91 9776-654-605
                </a>
                <a href="mailto:bidyaclasses8@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
                  <Mail size={14} className="text-accent" />
                  bidyaclasses8@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary/50">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
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
