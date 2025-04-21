export const initialTickets = [
  {
    id: "1",
    title: "First Ticket",
    content: "This is the first ticket",
    status: "OPEN" as const,
  },
  {
    id: "2",
    title: "Second Ticket",
    content: "This is the second ticket",
    status: "DONE" as const,
  },
  {
    id: "3",
    title: "Third Ticket",
    content: "This is the third ticket",
    status: "IN_PROGRESS" as const,
  },
];
