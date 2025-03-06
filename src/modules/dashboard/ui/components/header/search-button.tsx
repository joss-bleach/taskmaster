import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export const SearchButton = () => {
  return (
    <Button className="bg-background hover:text-foreground hover:bg-background flex h-[32px] w-[300px] cursor-pointer flex-row justify-start rounded-none border-none text-[#878787] shadow-none transition">
      <SearchIcon />
      Search
    </Button>
  );
};
