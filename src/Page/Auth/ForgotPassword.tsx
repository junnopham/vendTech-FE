import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Typography } from 'antd';
import { forgotPassword, resetPassword } from '../../service/user.service';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useTitle from '../../hooks/useTtitle';

const { Title } = Typography;

const ForgotPassword = () => {
	useTitle('Forgot Password');
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [userId, setUserId] = useState<string | null>(null);
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		setUserId(searchParams.get('id'));
		setToken(searchParams.get('token'));
	}, [searchParams]);

	const onFinish = async (values: any) => {
		try {
			if (userId && token) {
				const newPassword = values.newPassword;
				const response = await resetPassword({
					token,
					userId,
					password: newPassword,
				});
				message.success('Password reset successfully!');
				navigate('/sign-in');
			} else {
				const response = await forgotPassword(values.email);
				message.success(
					'Password reset email sent, please check your email!'
				);
			}
		} catch (error: any) {
			message.error(error.response.data.message);
			console.error(error);
		}
	};

	return (
		<div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
			<Title level={4} style={{ textAlign: 'center' }}>
				{userId && token ? 'Reset Password' : 'Forgot Password'}
			</Title>
			<Form
				name="forgotPassword"
				layout="vertical"
				onFinish={onFinish}
				style={{ maxWidth: '100%' }}
			>
				{!userId && !token ? (
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: 'Please input your email!',
							},
							{
								type: 'email',
								message: 'The input is not a valid email!',
							},
						]}
					>
						<Input />
					</Form.Item>
				) : (
					<>
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
					</>
				)}

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						style={{ width: '100%' }}
					>
						{userId && token ? 'Reset' : 'Send Reset Link'}
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default ForgotPassword;
