import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useInView } from 'react-intersection-observer';
import FormLayout from '../base/Form';

const { Option } = Select;

const FormSubmit: React.FC = () => {
	return (
		<div
			className="flex flex-wrap justify-center align-middle relative flex-col"
			style={{
				backgroundImage:
					'url(https://www.morsl.com.au/wp-content/uploads/2018/04/morsl-dark-pattern-800-08-1.png)',
				backgroundPosition: 'left top',
				backgroundRepeat: 'repeat',
			}}
		>
			<FormLayout />
		</div>
	);
};

export default FormSubmit;
