import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Study Materials", href: "/study-materials" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
];

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
    <nav
      className={cn(
        "fixed top-[60px] left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none text-primary">
                Bidya Bandana
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Concept School
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1",
                  location === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/admin/login">
            <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 text-primary">
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-12">
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
  );
}
