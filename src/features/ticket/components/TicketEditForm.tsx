import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";
import { editTicket } from "../actions/editTicket";

const TicketEditForm = ({ ticket }: Ticket) => {
  return (
    <form action={editTicket} className="flex flex-col gap-y-2">
      <input name="id" type="hidden" defaultValue={ticket.id} />
      <Label htmlFor="title">Title</Label>
      <Input type="text" name="title" id="title" defaultValue={ticket.title} />
      <Label htmlFor="content">Content</Label>
      <Textarea name="content" id="content" defaultValue={ticket.content} />
      <Button type="submit">Update Ticket</Button>
    </form>
  );
};

export default TicketEditForm;
