import { Header } from "../components/header";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background h-full">
      <Header />
      <div className="mx-auto h-full w-[380px] py-10">{children}</div>
    </div>
  );
};
