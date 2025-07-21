import FetchData from "../client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs fake",
  description: "fake data",
};

export default function Blogs() {
  return (
    <div className=" px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow">
        <div className="overflow-x-auto">
          <FetchData />
        </div>
      </div>
    </div>
  );
}
