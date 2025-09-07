import Navbar from "./_components/navbar/navbar";
import Sidebar from "./_components/sidebar/sidebar";
import Topbar from "./_components/topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <Topbar />
      <div className="w-full pt-[50px]">
        <div className="flex h-full gap-x-4">
          <Sidebar />
          <div className="pl-[5px] h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
