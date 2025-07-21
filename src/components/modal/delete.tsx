"use client";

import React from "react";
import type { PopconfirmProps } from "antd";
import { Button, message, Popconfirm } from "antd";

interface DeleteActionProps {
  id: number;
  onDelete: (id: number) => void;
}

const DeleteAction: React.FC<DeleteActionProps> = ({ id, onDelete }) => {
  const confirm: PopconfirmProps["onConfirm"] = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Xóa bài viết thành công!");
        onDelete(id); // Gọi onDelete để làm mới dữ liệu
      } else {
        throw new Error("Failed to delete");
      }
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
      message.error("Xóa bài viết thất bại!");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = () => {
    message.info("Đã hủy xóa");
  };

  return (
    <Popconfirm
      title="Xóa bài viết"
      description="Bạn có chắc chắn muốn xóa bài viết này?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Có"
      cancelText="Không"
      okButtonProps={{ className: "bg-red-600 text-white" }}
    >
      <Button danger className="text-red-600 border-red-600 hover:bg-red-100">
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteAction;
