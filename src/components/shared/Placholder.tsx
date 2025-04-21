import { MessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";

const Placholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = <div />,
}: {
  label: string;
  icon?: ReactElement;
  button?: ReactElement;
}) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "size-16 text-red-600",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export default Placholder;
