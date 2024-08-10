import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import './styles.css';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 }
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 }
	}
};

const SubmitForm: React.FC = () => {
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: '70px', height: '40px' }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
		</Form.Item>
	);

	const suffixSelector = (
		<Form.Item name="suffix" noStyle>
			<Select style={{ width: 70 }}>
				<Option value="USD">$</Option>
				<Option value="CNY">¥</Option>
			</Select>
		</Form.Item>
	);

	const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

	const onWebsiteChange = (value: string) => {
		if (!value) {
			setAutoCompleteResult([]);
		} else {
			setAutoCompleteResult(
				['.com', '.org', '.net'].map((domain) => `${value}${domain}`)
			);
		}
	};

	const websiteOptions = autoCompleteResult.map((website) => ({
		label: website,
		value: website
	}));

	return (
		<div
			className="flex justify-center align-middle relative flex-col"
			style={{
				backgroundImage:
					'url(https://www.morsl.com.au/wp-content/uploads/2018/04/morsl-dark-pattern-800-08-1.png)',
				backgroundPosition: 'left top',
				backgroundRepeat: 'repeat'
			}}
		>
			<div className="">
				<div className="flex justify-center py-20">
					<Form
						{...formItemLayout}
						form={form}
						name="register"
						onFinish={onFinish}
						initialValues={{
							residence: ['zhejiang', 'hangzhou', 'xihu'],
							prefix: '86'
						}}
						style={{
							maxWidth: 680,
							borderRadius: '10px',
							boxShadow:
								'rgba(0,0,0,.04) 0 1px 0,rgba(0,0,0,.05) 0 2px 7px,rgba(0,0,0,.06) 0 12px 22px'
						}}
						scrollToFirstError
						wrapperCol={{ span: 24 }}
						layout="vertical"
						className="px-16 py-16 bg-white"
					>
						<div
							className="flex justify-center flex-col text-center "
							style={{ color: '#280c2f' }}
						>
							<h2 className="text-4xl font-bold mb-12">
								Want to create a happier, healthier and more
								productive workplace?
							</h2>
							<p className="text-base mb-6 font-extralight">
								A micro-market solution is suitable for
								workplaces with 150+ employees.
							</p>
							<p className="text-base mb-6 ">
								<strong className="font-medium">
									Enquire below and one of our team members
									will be in touch shortly.
								</strong>
							</p>
						</div>
						<Form.Item
							name="fistName"
							label="First Name"
							className="custom-form-label"
							rules={[
								{
									required: true,
									message: 'Please input your first name'
								}
							]}
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item
							name="lastName"
							label="Last Name"
							rules={[
								{
									required: true,
									message: 'Please input your last name!'
								}
							]}
							hasFeedback
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item name="phone" label="Phone Number">
							<Input
								addonBefore={prefixSelector}
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item
							name="companyName"
							label="Company Name"
							rules={[
								{
									required: true,
									message: 'Please input your company!'
								}
							]}
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item
							name="siteName"
							label="Site Name (If applicable)"
							rules={[
								{
									required: true,
									message: 'Please input your site name!'
								}
							]}
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item
							name="numberOfEmployees"
							label="Number of employees"
							rules={[
								{
									required: true,
									message: 'Please input number of employees!'
								}
							]}
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item name="message" label="Message">
							<Input.TextArea
								showCount
								maxLength={200}
								style={{
									backgroundColor: '#f5f8fa',
									height: 'auto',
									padding: '6px 4px'
								}}
							/>
						</Form.Item>
						<Form.Item
							name="email"
							label="E-mail"
							rules={[
								{
									type: 'email',
									message: 'The input is not valid E-mail!'
								},
								{
									required: true,
									message: 'Please input your E-mail!'
								}
							]}
						>
							<Input
								style={{
									height: '40px',
									backgroundColor: '#f5f8fa'
								}}
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="button-submit"
							>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SubmitForm;
