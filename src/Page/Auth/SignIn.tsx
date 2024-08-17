import React, {useEffect} from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
import { signInWithUsernameAndPassword } from '../../service/user.service';
import useTitle from "../../hooks/useTtitle";
import {useLocation, useNavigate} from "react-router-dom";

const { Title } = Typography;

const SignIn: React.FC = () => {
    useTitle("Sign In");

    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const onFinish = async (values: { username: string; password: string }) => {
        try {
            const response = await signInWithUsernameAndPassword(values);
            signIn(response, response.accessToken);
            message.success('Login successfully!');
            const redirectUrl = location.state?.from?.pathname || "/admin/products";
            navigate(redirectUrl);
        } catch (error: any) {
            message.error(error.response.data.message);
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Vend Tech</Title>
            <Form name="login" onFinish={onFinish} style={{ maxWidth: '100%' }}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignIn;