import React, { useEffect, useState } from 'react';
import { Button, Card, Descriptions, Form, Input, message, Modal } from 'antd';
import './style.css';
import useTitle from '../../../hooks/useTtitle';
import withAuth from '../../../Components/Admin/withAuth';
import { useAuth } from '../../../context/AuthContext';
import { formatTime } from '../../../util/date-time';
import { useNavigate } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import { getUserByUsername, updateUser } from '../../../service/user.service';

const Profile = () => {
	useTitle('Profile');
	const navigate = useNavigate();
	const { user } = useAuth();
	const [form] = Form.useForm();

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [userData, setUserData] = useState<any>(null);

	useEffect(() => {
		if (user?.username) {
			getUserByUsername(user?.username).then((res) => {
				setUserData(res);
			});
		}
	}, [user]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	const onFinish = async (values: {
		currentPassword: string;
		newPassword: string;
		confirmPassword: string;
	}) => {
		try {
			let formUpdate: any = {
				confirmPassword: values.currentPassword,
				newPassword: values.newPassword,
			};

			await updateUser(formUpdate);

			message.success('Updated successfully!');
			setIsModalOpen(false);
		} catch (error) {
			message.error('Failed to update. Please try again.');
		}
	};

	return (
		<>
			{!!userData && (
				<>
					<Card
						title="Profile"
						style={{ maxWidth: 600, margin: '0 auto' }}
					>
						<Descriptions bordered>
							<Descriptions.Item label="ID" span={3}>
								{userData._id}
							</Descriptions.Item>
							<Descriptions.Item label="Username" span={3}>
								{userData.username}
							</Descriptions.Item>
							<Descriptions.Item label="Email" span={3}>
								{userData.email}
							</Descriptions.Item>
							<Descriptions.Item label="Created At" span={3}>
								{formatTime(userData.createdAt)}
							</Descriptions.Item>
							<Descriptions.Item label="Updated At" span={3}>
								{formatTime(userData.updatedAt)}
							</Descriptions.Item>
							<Descriptions.Item label="Password" span={3}>
								<Button
									type="link"
									icon={<EditOutlined />}
									iconPosition="end"
									size="small"
									style={{ marginLeft: '5px' }}
									onClick={showModal}
								>
									Update Password
								</Button>
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
												getFieldValue('newPassword') ===
													value
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
										message:
											'Please enter your current password!',
									},
								]}
							>
								<Input.Password />
							</Form.Item>
						</Form>
					</Modal>
				</>
			)}
		</>
	);
};

export default withAuth(Profile);
