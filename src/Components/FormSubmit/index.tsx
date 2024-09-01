import React from 'react';
import { Select } from 'antd';
import FormLayout from '../base/Form';

const { Option } = Select;

const FormSubmit: React.FC = () => {
	return (
		<div className="flex flex-wrap justify-center align-middle relative flex-col bg-[#ecece5]">
			<FormLayout />
		</div>
	);
};

export default FormSubmit;
