import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, message, Select, Space, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import withAuth from '../../../Components/Admin/withAuth';
import {
	createProduct,
	getProductById,
	updateProductById,
} from '../../../service/product.service';
import { getCategories } from '../../../service/category.service';

interface CategoryOption {
	label: string;
	value: string;
	description: string;
}

const AddAndEditProduct = () => {
	const { id, categoryId } = useParams();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [categoryList, setCategoryList] = useState<CategoryOption[]>([]);
	const [fileMainList, setFileMainList] = useState<any[]>([]);
	const [imageList, setImageList] = useState<any[]>([]);
	const [deletedImage, setDeleteImage] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const isEditMode = !!id;

	useEffect(() => {
		setLoading(true);
		getCategories(20, 1).then((response) => {
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
			getProductById(id)
				.then((response) => {
					const { mainImage, images } = response;
					form.setFieldsValue({
						...response,
						category: categoryId,
					});

					if (mainImage?._id) {
						setFileMainList([
							{
								uid: mainImage._id,
								name: mainImage.name,
								status: 'done',
								url: mainImage.url,
							},
						]);
					}

					if (images !== null && images.length > 0) {
						const list = images.map((image: any) => {
							return {
								uid: image._id,
								name: image.name,
								status: 'done',
								url: image.url,
							};
						});
						setImageList(list);
					}

					setLoading(false);
				})
				.catch(() => {
					message.error('No product with id: ' + id);
					navigate(
						'/admin/micro-market-solutions/view/' + categoryId
					);
				});
		} else {
			form.setFieldsValue({
				name: '',
				description: '',
				category: categoryId,
			});
			setFileMainList([]);
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

			if (fileMainList.length > 0) {
				if (!fileMainList[0].url) {
					formData.append('mainImage', fileMainList[0].originFileObj);
				}
			}

			if (imageList.length > 0) {
				imageList.forEach((image: any) => {
					formData.append('fileName', image.originFileObj);
				});
			}

			if (deletedImage.length > 0) {
				deletedImage.forEach((image: any) => {
					formData.append('deletedImages', image);
				});
			}

			if (isEditMode) {
				const updatedProduct = await updateProductById(id!, formData);
				message.success('Update successfully');
			} else {
				const newProduct = await createProduct(formData);
				message.success('Product created successfully');
			}
			navigate('/admin/micro-market-solutions/view/' + categoryId);
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

	const onReset = () => {
		form.setFieldsValue({
			_id: id,
			name: '',
			description: '',
			category: categoryId,
		});
		setFileMainList([]);
	};

	const onRemove = (file: any) => {
		setDeleteImage([...deletedImage, file.uid]);
	};

	const beforeUpload = (file: any) => {
		return false;
	};

	const handleMainFileChange = ({ fileList }: any) => {
		setFileMainList(fileList.splice(-1));
	};

	const handleFileChange = ({ fileList }: any) => {
		setImageList(fileList);
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
				<Form.Item
					label="Main Image"
					rules={[
						{
							required: true,
							message: 'Please select main image!',
						},
					]}
				>
					<Upload
						fileList={fileMainList}
						beforeUpload={beforeUpload}
						onChange={handleMainFileChange}
						listType="picture"
						accept="image/*"
					>
						<Button icon={<UploadOutlined />}>Select Image</Button>
					</Upload>
				</Form.Item>
				<Form.Item
					label="Image"
					rules={[
						{
							required: true,
							message: 'Please select image!',
						},
					]}
				>
					<Upload
						fileList={imageList}
						beforeUpload={beforeUpload}
						onChange={handleFileChange}
						onRemove={onRemove}
						listType="picture"
						accept="image/*"
						multiple={true}
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

export default withAuth(AddAndEditProduct);
