"use client";

import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";
import DataTable from "@/components/table/table";
import { Button } from "antd";
import { Akatab } from "next/font/google";
import CreateModal from "@/components/modal/create";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  });

export default function FetchData() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [editingData, setEditingData] = useState<IBlog | null>(null);
  const handleOpenCreateModal = () => {
    setEditingData(null);
    setShowModalCreate(true);
  };
  const handleCloseModal = () => {
    setEditingData(null);
    setShowModalCreate(false);
  };

  const handleDelete = (id: number) => {
    data?.filter((blog: IBlog) => blog.id !== id);
    mutate("http://localhost:8000/blogs");
  };
  useEffect(() => {
    if (data) {
      console.log("Dữ liệu blog:", data);
    }
    if (error) {
      console.error("Lỗi khi fetch:", error.message);
    }
  }, [data, error]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load data.</div>;
  if (!data) return <div>No blog data found.</div>;
  return (
    <div>
      <div className="flex justify-between ">
        <h2>Blogs Table</h2>
        <Button className="my-1" onClick={() => handleOpenCreateModal()}>
          Thêm
        </Button>
      </div>

      <DataTable
        props={data}
        onEdit={(record) => {
          setEditingData(record);
          setShowModalCreate(true);
        }}
        onDelete={handleDelete}
      />
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={handleCloseModal}
        editData={editingData}
      />
    </div>
  );
}
