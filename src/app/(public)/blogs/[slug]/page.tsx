"use client";
import { Card, Space } from "antd";
import Link from "next/link";
import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher<IBlog, string> = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  });

export default function Blogs({ params }: { params: { slug: string } }) {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.slug}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return null;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className=" px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow">
        <Space direction="vertical" className="w-full">
          <div>
            {" "}
            <Link href="/blogs">Go back</Link>
          </div>
          <Card title={data?.title}>
            <div className="space-y-2">
              <p className="text-red-600 font-semibold">
                Tác giả: {data?.author}
              </p>
              <p className="font-semibold">Nội dung:{data?.content}</p>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
}
