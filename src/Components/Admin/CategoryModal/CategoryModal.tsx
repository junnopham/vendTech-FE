import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import {
	createCategory,
	updateCategoryById,
} from '../../../service/category.service';

interface CategoryFormModalProps {
	category: Category;
	onClose: () => void;
	onUpdate: (updatedCategory: Category) => void;
	mode: 'edit' | 'add';
}

const CategoryModal: React.FC<CategoryFormModalProps> = ({
	category,
	onClose,
	onUpdate,
	mode,
}) => {
	const [form] = Form.useForm();
	const [isModalOpen, setIsModalOpen] = useState(true);

	useEffect(() => {
		if (mode === 'edit' && category) {
			form.setFieldsValue(category);
		} else {
			form.resetFields();
		}
	}, [mode, category]);

	const handleOk = async () => {
		try {
			const validate = await form.validateFields();
			let updatedCategory;

			if (mode === 'edit' && category) {
				const { _id, name } = validate;
				updatedCategory = await updateCategoryById(_id, name);
				message.success('Update successfully');
			} else {
				const { name } = validate;
				updatedCategory = await createCategory(name);
				message.success('Category added successfully');
			}
			onUpdate(updatedCategory);
			setIsModalOpen(false);
			onClose();
		} catch (error: any) {
			if (error.errorFields) {
				console.error(error);
			} else {
				message.error(
					mode === 'edit'
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

	return (
		<>
			<Modal
				title={mode === 'edit' ? 'Edit Category' : 'Add Category'}
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
					{mode === 'edit' && (
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
								message: 'Please input category name!',
							},
						]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default CategoryModal;
