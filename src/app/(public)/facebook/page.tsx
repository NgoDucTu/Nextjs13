import FacebookPage from "./client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook",
  description: "hello FB",
};

const Page = () => {
  return (
    <div>
      <FacebookPage />
    </div>
  );
};

export default Page;
