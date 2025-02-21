import { AuthLayout } from "@/modules/auth/ui/layout/auth-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <AuthLayout>{children}</AuthLayout>
    </div>
  );
};

export default Layout;
