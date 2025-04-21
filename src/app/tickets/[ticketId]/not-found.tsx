import Placholder from "@/components/shared/Placholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const NotFound = () => {
  return (
    <Placholder
      label="Ticket not found"
      button={
        <Button asChild variant={"outline"}>
          <Link href={ticketsPath()}>Go to Tickets</Link>
        </Button>
      }
    />
  );
};

export default NotFound;
