"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { toast } from "react-toastify";
import { title } from "process";
import { json } from "stream/consumers";
import { mutate } from "swr";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
  editData?: IBlog | null;
}

const CreateModal: React.FC<IProps> = ({
  showModalCreate,
  setShowModalCreate,
  editData,
}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);
  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
    } else {
      form.resetFields();
    }
  }, [editData, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const method = editData ? "PUT" : "POST";
      const url = editData
        ? `http://localhost:8000/blogs/${editData.id}` // Giả sử IBlog có trường id
        : "http://localhost:8000/blogs";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json", // dùng json, không phải x-www-form-urlencoded
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((response) => {
          toast.success(editData ? "Cập nhật thành công!" : "Tạo thành công!");
          mutate("http://localhost:8000/blogs");
        });

      setConfirmLoading(true);

      setTimeout(() => {
        form.resetFields();
        setShowModalCreate(false);
        setConfirmLoading(false);
      });
    } catch (error) {
      console.log("Validation Failed:", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setShowModalCreate(false);
  };

  return (
    <Modal
      title={editData ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}
      open={showModalCreate}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={600}
      maskClosable={false}
    >
      <Form form={form} layout="vertical" name="create_form" autoComplete="off">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please enter title!" }]}
        >
          <Input placeholder="Enter title" />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please enter author!" }]}
        >
          <Input placeholder="Enter author" />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "Please enter content!" }]}
        >
          <Input.TextArea placeholder="Enter content" rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal;
