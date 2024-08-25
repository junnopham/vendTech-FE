import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
	createProduct,
	getProductById,
	updateProductById,
} from '../../../service/product.service';

interface ProductFormModalProps {
	id: string | null;
	onClose: () => void;
	onUpdate: (updatedProduct: Product) => void;
}

const ProductModal: React.FC<ProductFormModalProps> = ({
	id,
	onClose,
	onUpdate,
}) => {
	const [form] = Form.useForm();
	const [isModalOpen, setIsModalOpen] = useState(true);
	const [fileList, setFileList] = useState<any[]>([]);
	const isEditMode = !!id;

	useEffect(() => {
		if (isEditMode && id) {
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
		} else {
			form.resetFields();
			setFileList([]);
		}
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

			if (isEditMode) {
				const updatedProduct = await updateProductById(id!, formData);
				onUpdate(updatedProduct);
				message.success('Update successfully');
			} else {
				const newProduct = await createProduct(formData);
				onUpdate(newProduct);
				message.success('Product created successfully');
			}

			setIsModalOpen(false);
			onClose();
		} catch (error: any) {
			if (error.errorFields) {
				console.error(error);
			} else {
				message.error(
					isEditMode
						? 'Error when updating product, please try again!'
						: 'Error when creating product, please try again!'
				);
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
				title={isEditMode ? 'Edit Product' : 'Add Product'}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Cancel
					</Button>,
					<Button key="submit" type="primary" onClick={handleOk}>
						{isEditMode ? 'Update' : 'Add'}
					</Button>,
				]}
			>
				<Form form={form} layout="vertical" name="edit_form">
					{isEditMode && (
						<Form.Item name="_id" label="ID">
							<Input disabled={true} />
						</Form.Item>
					)}
					<Form.Item
						name="name"
						label="Name"
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
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
							<Button icon={<UploadOutlined />}>
								Select Image
							</Button>
						</Upload>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default ProductModal;
