import { Header } from "../components/header";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background h-full">
      <Header />
      {children}
    </div>
  );
};
