import React from 'react';
import { Button, Form, Input, message, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import { signInWithUsernameAndPassword } from '../../service/user.service';
import useTitle from '../../hooks/useTtitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-white.svg';

const { Title } = Typography;

const SignIn: React.FC = () => {
	useTitle('Sign In');

	const { signIn } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	const onFinish = async (values: { username: string; password: string }) => {
		try {
			const response = await signInWithUsernameAndPassword(values);
			signIn(response, response.accessToken);
			message.success('Login successfully!');
			const redirectUrl = location.state?.from?.pathname || '/admin';
			navigate(redirectUrl);
		} catch (error: any) {
			message.error(error.response.data.message);
			console.error(error);
		}
	};

	return (
		<div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img src={logo} alt="logo" width={150} height={40} />
			</div>
			<Form name="login" onFinish={onFinish} style={{ maxWidth: '100%' }}>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input prefix={<UserOutlined />} placeholder="Username" />
				</Form.Item>

				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password
						prefix={<LockOutlined />}
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item style={{ marginBottom: 0 }}>
					<Button
						type="primary"
						htmlType="submit"
						style={{ width: '100%' }}
					>
						Login
					</Button>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Link
						to="/reset-password"
						style={{ textAlign: 'center', color: '#1890ff' }}
					>
						Forgot Password?
					</Link>
				</Form.Item>
			</Form>
		</div>
	);
};

export default SignIn;
