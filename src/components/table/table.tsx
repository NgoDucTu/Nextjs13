"use client";

import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

const columns: TableProps["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

interface DataTableProps {
  props: IBlog[];
}

const DataTable = ({ props }: DataTableProps) => {
  return <Table columns={columns} dataSource={props} rowKey="id" />;
};

export default DataTable;
