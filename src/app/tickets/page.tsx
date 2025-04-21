import CardComponent from "@/components/shared/CardComponent";
import Heading from "@/components/shared/Heading";
import Spinner from "@/components/shared/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import TicketUpsertForm from "@/features/ticket/components/TicketUpsertForm";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex-col flex gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <CardComponent
        description="A new ticket will be created"
        title="Create Ticket"
        className="w-full max-w-[420px] self-center"
        content={<TicketUpsertForm />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
