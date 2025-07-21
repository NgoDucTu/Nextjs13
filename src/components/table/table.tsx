"use client";

import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import Link from "next/link";
import DeleteAction from "../modal/delete";
interface DataTableProps {
  props: IBlog[];
  onEdit: (record: IBlog) => void;
  onDelete: (id: number) => void;
}

const DataTable = ({ props, onEdit, onDelete }: DataTableProps) => {
  const columns: TableProps<IBlog>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "descend",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/blogs/${record.id}`}>Views</Link>{" "}
          {/* Sử dụng URL động */}
          <a onClick={() => onEdit(record)}>Edit</a>
          <DeleteAction id={record.id} onDelete={onDelete} />{" "}
          {/* Tích hợp DeleteAction */}
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={props} rowKey="id" />;
};

export default DataTable;
