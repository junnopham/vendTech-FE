import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useInView } from 'react-intersection-observer';
interface IProps {
	className?: string;
}
const FormLayout = (props: IProps) => {
	const [form] = Form.useForm();
	const { ref, inView } = useInView({
		threshold: 0.25,
		triggerOnce: true
	});
	const { className } = props;
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 12 }
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 }
		}
	};

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};

	return (
		<div ref={ref} className={className}>
			<div className="flex justify-center py-20 ">
				<Form
					{...formItemLayout}
					form={form}
					name="register"
					onFinish={onFinish}
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '86'
					}}
					scrollToFirstError
					wrapperCol={{ span: 24 }}
					layout="vertical"
					className="px-16 py-16 bg-white rounded-[10px] shadow-[rgba(0,0,0,0.04)_0_1px_0,rgba(0,0,0,0.05)_0_2px_7px,rgba(0,0,0,0.06)_0_12px_22px] max-w-[680px]"
				>
					<div className="flex justify-center flex-col text-center text-[#280c2f]">
						<h2
							className={`text-4xl font-bold mb-12 transition-all duration-1000 ${inView ? 'opacity-1' : 'translate-y-full opacity-0'}`}
						>
							Want to create a happier, healthier and more
							productive workplace?
						</h2>
						<p className="text-base mb-6 font-extralight">
							A micro-market solution is suitable for workplaces
							with 150+ employees.
						</p>
						<p className="text-base mb-6 ">
							<strong className="font-medium">
								Enquire below and one of our team members will
								be in touch shortly.
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
					</Form.Item>
					<Form.Item name="phone" label="Phone Number">
						<Input className="bg-[#f5f8fa] h-[40px]" />
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
					</Form.Item>
					<Form.Item name="message" label="Message">
						<Input.TextArea
							showCount
							maxLength={200}
							className="bg-[#f5f8fa] h-auto px-1 py-[6px]"
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
						<Input className="bg-[#f5f8fa] h-[40px]" />
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="text-white !bg-[#52b2bf] h-10 w-24 rounded hover:opacity-80 "
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default FormLayout;
