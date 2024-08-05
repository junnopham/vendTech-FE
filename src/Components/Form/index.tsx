import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import {
	AutoComplete,
	Button,
	Cascader,
	Checkbox,
	Col,
	Form,
	Input,
	InputNumber,
	Row,
	Select
} from 'antd';

const { Option } = Select;

interface DataNodeType {
	value: string;
	label: string;
	children?: DataNodeType[];
}

const residences: CascaderProps<DataNodeType>['options'] = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake'
					}
				]
			}
		]
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men'
					}
				]
			}
		]
	}
];

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

const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0
		},
		sm: {
			span: 16,
			offset: 8
		}
	}
};

const SubmitForm: React.FC = () => {
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select style={{ width: 70 }}>
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
				backgroundRepeat: 'repeat',
				willChange: 'transform',
				transform: 'translate3d(0px, 135px, 0px) scale(1.005)'
			}}
		>
			<div className="">
				<div className="flex justify-center">
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
						layout="vertical"
						className="px-16 py-16 w-full bg-white"
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
							rules={[
								{
									required: true,
									message: 'Please input your first name'
								}
							]}
							className="w-full"
						>
							<Input />
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
							<Input />
						</Form.Item>
						<Form.Item name="phone" label="Phone Number">
							<Input
								addonBefore={prefixSelector}
								style={{ width: '100%' }}
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
							<Input />
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
							<Input />
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
							<Input />
						</Form.Item>
						<Form.Item name="message" label="Message">
							<Input.TextArea
								showCount
								maxLength={200}
								className="w-full"
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
							<Input />
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit">
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
