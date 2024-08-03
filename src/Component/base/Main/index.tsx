import React from 'react';
import MicroMarket from '../../MicroMarket';
import SmartFridge from '../../SmartFride';
import OfficeWorks from '../../OfficeWorks';

const Main = () => {
	return (
		<>
			<div className="px-24 py-0">
				<MicroMarket />
				<SmartFridge />
			</div>
			<OfficeWorks />
		</>
	);
};

export default Main;
