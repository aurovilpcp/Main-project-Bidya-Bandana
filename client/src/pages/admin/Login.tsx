import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/admin/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto bg-primary text-primary-foreground p-3 rounded-xl w-fit">
            <GraduationCap size={32} />
          </div>
          <div>
            <CardTitle className="text-2xl">Admin Portal</CardTitle>
            <CardDescription>Sign in to manage the institute dashboard</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="admin@bidyaclasses.com" defaultValue="admin@bidyaclasses.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" defaultValue="password" />
            </div>
            <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/">
              <a className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Website
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
