import Heading from "@/components/shared/Heading";
import Spinner from "@/components/shared/Spinner";
import TicketList from "@/features/ticket/components/TicketList";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex-col flex gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
