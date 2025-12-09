import { Phone, Mail, Facebook, Twitter, Youtube } from "lucide-react";

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 border-b border-primary">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="tel:+919776280828" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} />
            <span>+91 9776280828</span>
          </a>
          <a href="mailto:bidyaclasses8@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} />
            <span>bidyaclasses8@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Youtube, href: "#" },
          ].map(({ Icon, href }, i) => (
            <a 
              key={i}
              href={href} 
              className="hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
