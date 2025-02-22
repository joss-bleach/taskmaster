import { getSession } from "@/supabase/session";
import { redirect } from "next/navigation";

const Home = async () => {
  const { data: session } = await getSession();
  if (!session) return redirect("/sign-in");

  return <div>Home</div>;
};

export default Home;
