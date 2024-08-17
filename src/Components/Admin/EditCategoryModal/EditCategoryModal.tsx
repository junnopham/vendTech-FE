import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { updateCategoryById } from '../../../service/category.service';

interface EditFormModalProps {
  category: Category;
  onClose: () => void;
  onUpdate: (updatedCategory: Category) => void;
}

const EditCategoryModal: React.FC<EditFormModalProps> = ({
  category,
  onClose,
  onUpdate,
}) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    form.setFieldsValue(category);
  }, [category]);

  const handleOk = async () => {
    try {
      const validate = await form.validateFields();
      const { _id, name } = validate;

      const updatedProduct = await updateCategoryById(_id, name);
      onUpdate(updatedProduct);
      message.success('Update successfully');
      setIsModalOpen(false);
      onClose();
    } catch (error: any) {
      if (error.errorFields) {
        console.error(error);
      } else {
        message.error('Error when updating product, please try again!');
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      <Modal
        title="Edit product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Update
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" name="edit_form">
          <Form.Item name="_id" label="ID">
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input category name!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditCategoryModal;
