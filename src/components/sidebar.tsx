import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <Link href="/">
        <h2 className="font-semibold uppercase tracking-wide">Taskmaster</h2>
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
