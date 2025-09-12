import Navbar from "./_components/navbar/navbar";
import Sidebar from "./_components/sidebar/sidebar";
import Topbar from "./_components/topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="h-[50px]">
          <Topbar />
        </div>

        <div className="h-[60px]">
          <Navbar />
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
