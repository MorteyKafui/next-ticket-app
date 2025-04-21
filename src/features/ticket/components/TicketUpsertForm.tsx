"use client";

import { SubmitButton } from "@/components/shared/SubmitButtom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";
import { upsertTicket } from "../actions/upsertTicket";
import { useActionState } from "react";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    {
      message: "",
      fieldErrors: {},
    }
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <span className="text-sm text-red-500">
        {actionState.fieldErrors.title?.[0]}
      </span>

      <Label htmlFor="content">Content</Label>
      <Textarea
        name="content"
        id="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <span className="text-sm text-red-500">
        {actionState.fieldErrors.content?.[0]}
      </span>

      <SubmitButton label={ticket ? "Edit Ticket" : "Create Ticket"} />
      {actionState.message}
    </form>
  );
};

export default TicketUpsertForm;
