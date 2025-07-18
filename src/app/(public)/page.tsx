import DataTable from "@/components/table/table";
import Link from "next/link";
import FetchData from "./client";


export default function Home() {


  return (
    <div className=" px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      {/* Navigation links */}
      <nav className="mb-6">
        <ul>
          <li className="mb-2 sm:mb-0">
            <Link href="/facebook">Facebook</Link>
          </li>
          <li>
            <Link href="/zalo">Zalo</Link>
          </li>
        </ul>
      </nav>

      {/* Container for DataTable */}
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow">
        <div className="overflow-x-auto">
          <FetchData />
        </div>
      </div>
    </div >
  );
}
