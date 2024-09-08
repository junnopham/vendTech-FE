import React, { useState } from 'react';
import './style.css';
import {
	InboxOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MessageOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import logo from '../../../assets/logo-white.svg';
import logoIcon from '../../../assets/logo-vend-tech.svg';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
	const { signOut } = useAuth();
	const location = useLocation();
	const pathname = location.pathname;
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				width={230}
				trigger={null}
				collapsible
				collapsed={collapsed}
				breakpoint="lg"
				collapsedWidth="80"
				onCollapse={(collapsed) => setCollapsed(collapsed)}
			>
				<div className="logo-vend-tech">
					<Link to="/">
						<span className="logo">
							{!collapsed ? (
								<img
									src={logo}
									alt="logo"
									width={120}
									height={32}
								/>
							) : (
								<img
									src={logoIcon}
									alt="logo"
									width={32}
									height={32}
								/>
							)}
						</span>
					</Link>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[pathname]}
					items={[
						{
							key: '/admin/profile',
							icon: <UserOutlined />,
							label: <Link to="/admin/profile">Profile</Link>,
						},
						{
							key: '/admin/micro-market-solutions',
							icon: <InboxOutlined />,
							label: (
								<Link to="/admin/micro-market-solutions">
									Micro market solutions
								</Link>
							),
						},
						{
							key: '/admin/food-and-drink',
							icon: <InboxOutlined />,
							label: (
								<Link to="/admin/food-and-drink">
									Food and drink
								</Link>
							),
						},
						{
							key: '/admin/guestInfo',
							icon: <MessageOutlined />,
							label: (
								<Link to="/admin/guestInfo">Guest Info</Link>
							),
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
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
					<Button
						type="text"
						style={{ marginRight: '10px' }}
						onClick={signOut}
					>
						Sign Out
					</Button>
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
