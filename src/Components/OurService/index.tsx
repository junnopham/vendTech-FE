import React from 'react';
import { itemInfo2 } from '../../const';
import Card from '../base/Card';

const OurService = () => {
	return (
		<div className="pt-16 pb-24">
			<h3 className="font-bold text-left mb-8 not-italic px-10 text-[#52B2BF] text-[30px] leading-[64px]">
				Our Service
			</h3>
			<Card items={itemInfo2} />
		</div>
	);
};

export default OurService;
