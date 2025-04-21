import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit">
      {pending && <LoaderCircle className="size-4 animate-spin mr-2" />}
      {label}
    </Button>
  );
};
