import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  Tags, 
  Bell, 
  Settings, 
  LogOut,
  GraduationCap
} from "lucide-react";

const ADMIN_NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Study Materials", href: "/admin/materials", icon: BookOpen },
  { label: "Categories", href: "/admin/categories", icon: Tags },
  { label: "Notices", href: "/admin/notices", icon: Bell },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col fixed h-full left-0 top-0 overflow-y-auto z-40">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground p-2 rounded-lg">
            <GraduationCap size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sidebar-foreground leading-none">
              Admin Panel
            </span>
            <span className="text-xs text-sidebar-foreground/60">
              Bidya Bandana
            </span>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {ADMIN_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <Icon size={18} />
                {item.label}
              </a>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Link href="/">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut size={18} />
            Logout
          </a>
        </Link>
      </div>
    </aside>
  );
}
