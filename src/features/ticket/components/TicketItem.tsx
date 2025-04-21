import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath, ticketsPath } from "@/paths";
import clsx from "clsx";
import { Pencil, SquareArrowOutUpRight, Trash } from "lucide-react";
import Link from "next/link";
import { TICKET_ICONS } from "../constant";
import { Ticket } from "@/generated/prisma/client";
import { deleteTicket } from "../actions/deleteTicket";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant={"outline"} size={"icon"} asChild>
      <Link prefetch href={ticketPath(ticket.id)}>
        <SquareArrowOutUpRight className="size-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant={"outline"} size={"icon"}>
        <Trash className="size-4" />
      </Button>
    </form>
  );
  const editButton = (
    <Button asChild size={"icon"} variant={"outline"}>
      <Link prefetch href={`${ticketsPath()}/${ticket.id}/edit`}>
        <Pencil className="size-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx("w-full max-w-[580px] flex gap-x-1", {
        "max-w-[420px]": isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx(" whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export default TicketItem;
