import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen min-h-screen w-full flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="py-6">{children}</main>
      </div>
    </div>
  );
};
