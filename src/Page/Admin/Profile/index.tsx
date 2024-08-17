import React, { useEffect, useState } from 'react';
import { Button, Card, Descriptions, Form, Input, message, Modal } from 'antd';
import './style.css';
import useTitle from '../../../hooks/useTtitle';
import withAuth from '../../../Components/Admin/withAuth';
import { useAuth } from '../../../context/AuthContext';
import { formatTime } from '../../../util/date-time';
import { updateUser } from '../../../service/user.service';

type FormUpdate = {
	username: string;
	currentPassword: string;
	newPassword: string;
};

const User = () => {
	useTitle('Profile');
	const { user } = useAuth();
	const [form] = Form.useForm();

	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		form.setFieldsValue(user);
	}, [user]);

	const showModal = () => {
		form.setFieldsValue(user);
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	const getData = (data: FormUpdate) => {
		return Object.fromEntries(
			Object.entries(data).filter(
				([key, value]) =>
					value !== undefined && value !== null && value !== ''
			)
		);
	};

	const onFinish = async (values: {
		username: string;
		currentPassword: string;
		newPassword: string;
		confirmPassword: string;
	}) => {
		try {
			if (values.newPassword !== values.confirmPassword) {
				message.error('New password and confirmation do not match!');
				return;
			}

			let formUpdate = {
				username: values.username,
				currentPassword: values.currentPassword,
				newPassword: values.newPassword,
			};

			const data = getData(formUpdate);

			await updateUser(data);

			message.success('Updated successfully!');
			setIsModalOpen(false);
		} catch (error) {
			message.error('Failed to update. Please try again.');
		}
	};

	return (
		<>
			<Card
				title="Profile"
				style={{ maxWidth: 600, margin: '0 auto' }}
				extra={
					<Button type="primary" onClick={showModal}>
						Edit Profile
					</Button>
				}
			>
				<Descriptions bordered>
					<Descriptions.Item label="ID" span={3}>
						{user._id}
					</Descriptions.Item>
					<Descriptions.Item label="Username" span={3}>
						{user.username}
					</Descriptions.Item>
					<Descriptions.Item label="Email" span={3}>
						{user.email}
					</Descriptions.Item>
					<Descriptions.Item label="Created At" span={3}>
						{formatTime(user.createdAt)}
					</Descriptions.Item>
					<Descriptions.Item label="Updated At" span={3}>
						{formatTime(user.updatedAt)}
					</Descriptions.Item>
				</Descriptions>
			</Card>
			<Modal
				title="Edit Profile"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Cancel
					</Button>,
					<Button
						key="submit"
						type="primary"
						onClick={() => form.submit()}
					>
						Update
					</Button>,
				]}
			>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					name="edit_form"
				>
					<Form.Item name="username" label="Username">
						<Input placeholder="Enter new username" />
					</Form.Item>
					<Form.Item name="email" label="Email">
						<Input disabled={true} />
					</Form.Item>
					<Form.Item name="newPassword" label="New Password">
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="confirmPassword"
						label="Confirm New Password"
						dependencies={['newPassword']}
						rules={[
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue('newPassword') === value
									) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error(
											'The two passwords do not match!'
										)
									);
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						name="currentPassword"
						label="Current Password"
						rules={[
							{
								required: true,
								message: 'Please enter your current password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default withAuth(User);
