import Heading from "@/components/shared/Heading";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/TicketItem";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex-col flex gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
