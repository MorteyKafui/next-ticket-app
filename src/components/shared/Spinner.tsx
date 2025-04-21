import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center">
      <LoaderCircle className="animate-spin size-16" />
    </div>
  );
};

export default Spinner;
