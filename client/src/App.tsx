import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Public Pages
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import StudyMaterials from "@/pages/StudyMaterials";
import Notices from "@/pages/Notices";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

// Admin Pages
import { AdminLayout } from "@/components/layout/AdminLayout";
import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";
import ManageMaterials from "@/pages/admin/ManageMaterials";
import ManageCategories from "@/pages/admin/ManageCategories";
import ManageNotices from "@/pages/admin/ManageNotices";

function Router() {
  return (
    <Switch>
      {/* Admin Routes */}
      <Route path="/admin/login" component={AdminLogin} />

      <Route path="/admin/dashboard">
        <AdminLayout title="Dashboard">
          <AdminDashboard />
        </AdminLayout>
      </Route>

      <Route path="/admin/materials">
        <AdminLayout title="Manage Study Materials">
          <ManageMaterials />
        </AdminLayout>
      </Route>

      <Route path="/admin/categories">
        <AdminLayout title="Manage Categories">
          <ManageCategories />
        </AdminLayout>
      </Route>

      <Route path="/admin/notices">
        <AdminLayout title="Manage Notices">
          <ManageNotices />
        </AdminLayout>
      </Route>

      <Route path="/admin/settings">
        <AdminLayout title="Settings">
          <div className="text-muted-foreground p-4">
            Settings page placeholder
          </div>
        </AdminLayout>
      </Route>

      {/* Public Routes wrapped in Layout */}
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>

      <Route path="/about">
        <Layout>
          <About />
        </Layout>
      </Route>

      <Route path="/study-materials">
        <Layout>
          <StudyMaterials />
        </Layout>
      </Route>

      <Route path="/notices">
        <Layout>
          <Notices />
        </Layout>
      </Route>

      <Route path="/contact">
        <Layout>
          <Contact />
        </Layout>
      </Route>

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
