import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { Kanban } from "lucide-react";
import { homePath, ticketsPath } from "@/paths";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20  bg-background/95 backdrop-blur w-full flex justify-between items-center py-2.5 px-5 border-b">
      <div className="flex align-items gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <Kanban />
          <h1 className="text-lg font-semibold ml-2">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        <Link
          className={buttonVariants({ variant: "default" })}
          href={ticketsPath()}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export default Header;
