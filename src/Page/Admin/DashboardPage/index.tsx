import React, { useState } from 'react';
import './style.css';
import {
	InboxOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MessageOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
	const location = useLocation();
	const pathname = location.pathname;
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				breakpoint="lg"
				collapsedWidth="80"
				onCollapse={(collapsed) => setCollapsed(collapsed)}
			>
				<div className="logo-vend-tech">
					<span className="logo">
						{!collapsed ? 'Vend Tech' : 'VT'}
					</span>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[pathname]}
					items={[
						{
							key: '/admin',
							icon: <UserOutlined />,
							label: <Link to="/admin">User</Link>,
						},
						{
							key: '/admin/products',
							icon: <InboxOutlined />,
							label: <Link to="/admin/products">Product</Link>,
						},
						{
							key: '/admin/guestInfo',
							icon: <MessageOutlined />,
							label: (
								<Link to="/admin/guestInfo">Guest Info</Link>
							),
						},
						{
							key: '/admin/category',
							icon: <UnorderedListOutlined />,
							label: <Link to="/admin/category">Category</Link>,
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
