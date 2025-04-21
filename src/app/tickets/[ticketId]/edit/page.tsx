import CardComponent from "@/components/shared/CardComponent";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { getTicket } from "@/features/ticket/queries/getTicket";
import { notFound } from "next/navigation";

const TicketEditPage = async ({ params }: { params: { ticketId: string } }) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardComponent
        title="Edit Ticket"
        description="Edit an existing ticket"
        className="w-full max-w-[420px] animate-in"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
