import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Login issue",
    content: "User cannot log in with valid credentials.",
    status: "OPEN" as const,
  },
  {
    title: "Feature request: Dark mode",
    content: "Add dark mode for the dashboard.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Bug in reporting module",
    content: "Totals are incorrect in the finance report.",
    status: "DONE" as const,
  },
  {
    title: "Update user profile fails",
    content: "API throws a 500 error when saving profile changes.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "Mobile layout broken",
    content: "The layout is distorted on smaller screens.",
    status: "OPEN" as const,
  },
  {
    title: "Database performance issue",
    content: "Queries are taking too long in the reports section.",
    status: "DONE" as const,
  },
  {
    title: "Email notifications not sent",
    content: "No emails are sent when submitting the form.",
    status: "OPEN" as const,
  },
  {
    title: "User roles not updating",
    content: "Changes to user roles don't reflect until logout.",
    status: "IN_PROGRESS" as const,
  },
  {
    title: "File upload limit",
    content: "Need to increase max upload size for PDFs.",
    status: "DONE" as const,
  },
  {
    title: "Improve search performance",
    content: "Search results are too slow on large datasets.",
    status: "OPEN" as const,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();

  for (const ticket of tickets) {
    await prisma.ticket.create({
      data: ticket,
    });
  }
};

seed();
