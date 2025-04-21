import Heading from "@/components/shared/Heading";
import { ticketsPath } from "@/paths";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex-col flex gap-y-8">
      <Heading title="Home" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link className="underline" href={ticketsPath()}>
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
