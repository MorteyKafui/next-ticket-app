import Placholder from "@/components/shared/Placholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/TicketItem";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find(ticket => ticket.id == ticketId);

  if (!ticket) {
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
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
