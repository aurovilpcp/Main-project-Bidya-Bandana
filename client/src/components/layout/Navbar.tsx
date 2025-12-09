import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, GraduationCap, User, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/data/mockData";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Study Materials", href: "/study-materials" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
];

function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground h-12 flex items-center border-b border-primary/20">
      <div className="container mx-auto px-4 flex items-center justify-between w-full">
        <div className="flex items-center gap-6 text-sm">
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={16} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail size={16} />
            <span>{CONTACT_INFO.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Instagram, href: "#" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} className="hover:opacity-80 transition-opacity">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <nav
        className={cn(
          "fixed top-12 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-border shadow-sm"
            : "bg-white border-border/40"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <Link href="/">
            <a className="flex items-center gap-3 group shrink-0">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:scale-105 transition-transform">
                <GraduationCap size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base leading-none text-primary">
                  Bidya Bandana
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">
                  Concept School
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    location === item.href
                      ? "text-primary underline underline-offset-2"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin/login">
              <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary text-primary hover:bg-primary/5">
                <User size={16} />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-8">
                <div className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          location === item.href
                            ? "text-primary font-bold"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                  <hr className="border-border" />
                  <Link href="/admin/login">
                    <Button className="w-full gap-2" onClick={() => setIsOpen(false)}>
                      <User size={16} />
                      Admin Portal
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
