import TicketForm from "@/features/ticket/components/TicketForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { ReactNode } from "react";

type CardComponentProps = {
  title: string;
  description: string;
  content: ReactNode;
  className?: string;
  footer?: ReactNode;
};

const CardComponent = ({
  title,
  description,
  content,
  className,
  footer,
}: CardComponentProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default CardComponent;
