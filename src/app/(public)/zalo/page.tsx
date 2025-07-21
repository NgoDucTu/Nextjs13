import ZaloPage from "./client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zalo",
  description: "hello ZL",
};

const Page = () => {
  return (
    <div>
      Zalo
      <ZaloPage />
    </div>
  );
};

export default Page;
