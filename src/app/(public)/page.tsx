import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tund Next JS 13",
  description: "About nextjs 13",
};

export default function Home() {
  return (
    <div className=" px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      {/* Navigation links */}
      <nav className="mb-6">
        <ul>
          <li className="mb-2 sm:mb-0">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>

      {/* Container for DataTable */}
    </div>
  );
}
