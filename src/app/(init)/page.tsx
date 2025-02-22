import { getUser } from "@/supabase/get-user";

const Page = async () => {
  const user = await getUser();
  console.log(user);

  return <div>{JSON.stringify(user)}</div>;
};

export default Page;
