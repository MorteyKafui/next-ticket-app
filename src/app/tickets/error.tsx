"use client";

import Placholder from "@/components/shared/Placholder";

const Error = ({ error }: { error: Error }) => {
  return <Placholder label={error.message || "Something went wrong"} />;
};

export default Error;
