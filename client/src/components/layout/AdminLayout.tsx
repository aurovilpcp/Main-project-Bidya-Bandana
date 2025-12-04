import { ReactNode } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { Toaster } from "@/components/ui/toaster";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
}

export function AdminLayout({ children, title, actions }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="pl-64 min-h-screen flex flex-col">
        <header className="h-16 border-b border-border bg-card px-8 flex items-center justify-between sticky top-0 z-30">
          <h1 className="text-xl font-serif font-bold text-foreground">{title || "Dashboard"}</h1>
          <div className="flex items-center gap-4">
             <span className="text-sm text-muted-foreground">Welcome, Admin</span>
             <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
               A
             </div>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-auto">
          {actions && <div className="mb-6 flex justify-end">{actions}</div>}
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
}
