import AppSidebar from "@/components/dashboard/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
      <main>{children}</main>
    </div>
  );
}
