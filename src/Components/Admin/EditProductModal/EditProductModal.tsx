import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  getProductById,
  updateProductById,
} from '../../../service/product.service';

interface EditFormModalProps {
  id: string;
  onClose: () => void;
  onUpdate: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditFormModalProps> = ({
  id,
  onClose,
  onUpdate,
}) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [fileList, setFileList] = useState<any[]>([]);

  useEffect(() => {
    getProductById(id).then((response) => {
      const { image } = response;
      form.setFieldsValue(response);

      if (image?._id) {
        setFileList([
          {
            uid: image._id,
            name: image.name,
            status: 'done',
            url: image.url,
          },
        ]);
      }
    });
  }, [id]);

  const handleOk = async () => {
    try {
      const validate = await form.validateFields();
      const { _id, name, description } = validate;
      let formData: FormData = new FormData();

      formData.append('name', name);
      formData.append('description', description);

      if (fileList.length > 0) {
        if (!fileList[0].url) {
          formData.append('fileName', fileList[0].originFileObj);
        }
      }

      const updatedProduct = await updateProductById(_id, formData);
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

  const beforeUpload = (file: any) => {
    return false;
  };

  const handleFileChange = ({ fileList }: any) => {
    setFileList(fileList.slice(-1));
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
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item label="Image">
            <Upload
              fileList={fileList}
              beforeUpload={beforeUpload}
              onChange={handleFileChange}
              listType="picture"
              accept="image/*"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProductModal;
