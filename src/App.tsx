import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Sales from "./pages/Sales";
import Stock from "./pages/Stock";
import Reports from "./pages/Reports";
import UsersPage from "./pages/UsersPage";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { cn } from "./lib/utils";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex w-full bg-background">
            <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
            <div className={cn(
              "flex-1 flex flex-col transition-all duration-300",
              sidebarCollapsed ? "ml-16" : "ml-64"
            )}>
              <Navbar />
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/stock" element={<Stock />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/settings" element={<Settings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
