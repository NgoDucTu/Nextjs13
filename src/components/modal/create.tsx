"use client";

import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}

const CreateModal: React.FC<IProps> = ({
  showModalCreate,
  setShowModalCreate,
}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setConfirmLoading(true);

      setTimeout(() => {
        console.log("Form values:", values);
        message.success("Create success!");
        form.resetFields();
        setShowModalCreate(false);
        setConfirmLoading(false);
      }, 1000);
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
      title="Create New Post"
      open={showModalCreate}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      width={600}
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
