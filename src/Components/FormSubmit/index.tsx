import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useInView } from 'react-intersection-observer';
import FormLayout from '../base/Form';

const { Option } = Select;

const FormSubmit: React.FC = () => {
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
			<FormLayout />
		</div>
	);
};

export default FormSubmit;
