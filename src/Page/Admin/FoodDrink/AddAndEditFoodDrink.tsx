import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, message, Select, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import withAuth from '../../../Components/Admin/withAuth';
import {
	createFoodDrink,
	getFoodDrinkById,
	getFoodDrinkCategories,
	updateFoodDrinkById,
} from '../../../service/foodanddrink.services';

interface CategoryOption {
	label: string;
	value: string;
	description: string;
}

const AddAndEditDrinkFood = () => {
	const { id, categoryId } = useParams();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [categoryList, setCategoryList] = useState<CategoryOption[]>([]);
	const [fileList, setFileList] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const isEditMode = !!id;

	useEffect(() => {
		setLoading(true);
		getFoodDrinkCategories(20, 1).then((response) => {
			setCategoryList(
				response.data.map((item: any) => {
					return {
						label: item.name,
						value: item._id,
						description: item.description,
					};
				})
			);
		});

		if (isEditMode && id) {
			getFoodDrinkById(id)
				.then((response) => {
					const { image } = response;
					form.setFieldsValue({
						...response,
						category: categoryId,
					});

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

					setLoading(false);
				})
				.catch(() => {
					message.error('No food and drink with id: ' + id);
					navigate('/admin/food-and-drink/view/' + categoryId);
				});
		} else {
			form.setFieldsValue({
				name: '',
				description: '',
				category: categoryId,
			});
			setFileList([]);
			setLoading(false);
		}
	}, [id]);

	const onFinish = async () => {
		try {
			const validate = await form.validateFields();
			const { _id, name, description, category } = validate;
			let formData: FormData = new FormData();

			formData.append('name', name);
			formData.append('description', description);
			formData.append('category', category);

			if (fileList.length > 0) {
				if (!fileList[0].url) {
					formData.append('fileName', fileList[0].originFileObj);
				}
			}

			if (isEditMode) {
				await updateFoodDrinkById(id!, formData);
				message.success('Update successfully');
			} else {
				await createFoodDrink(formData);
				message.success('Food and drink created successfully');
			}
			navigate('/admin/food-and-drink/view/' + categoryId);
		} catch (error: any) {
			if (error.errorFields) {
				console.error(error);
			} else {
				message.error(
					isEditMode
						? 'Error when updating food and drink, please try again!'
						: 'Error when creating food and drink, please try again!'
				);
			}
		}
	};

	const onReset = () => {
		form.setFieldsValue({
			_id: id,
			name: '',
			description: '',
			category: categoryId,
		});
		setFileList([]);
	};

	const beforeUpload = (file: any) => {
		return false;
	};

	const handleFileChange = ({ fileList }: any) => {
		setFileList(fileList);
	};

	return (
		<>
			<Form
				form={form}
				name="edit_form"
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				style={{ maxWidth: 600, margin: '0 auto' }}
			>
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
				<Form.Item
					name="category"
					label="Category"
					rules={[
						{
							required: true,
							message: 'Please select a category!',
						},
					]}
				>
					<Select
						placeholder="Select category"
						loading={loading}
						options={categoryList}
						optionRender={(option: any) => (
							<div>
								<strong>{option.label}</strong>
								<div
									style={{ fontSize: '12px', color: 'gray' }}
								>
									{option.data.description}
								</div>
							</div>
						)}
						disabled={true}
						allowClear
					/>
				</Form.Item>
				<Form.Item label="Image">
					<Upload
						fileList={fileList}
						beforeUpload={beforeUpload}
						onChange={handleFileChange}
						listType="picture"
						accept="image/*"
						multiple={false}
					>
						<Button icon={<UploadOutlined />}>Select Image</Button>
					</Upload>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Space>
						<Button type="primary" htmlType="submit">
							{isEditMode ? 'Update' : 'Add'}
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</>
	);
};

export default withAuth(AddAndEditDrinkFood);
