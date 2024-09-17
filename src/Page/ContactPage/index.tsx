import React from 'react';
import FormLayout from '../../Components/base/Form';

const ContactPage = () => {
	return (
		<div className="bg-[#F5F5F5] flex justify-center pb-10 pt-[60px] px-32">
			<div className="flex flex-wrap">
				<div className="flex-1 basis-1/2 pl-5 py-5 pr-14">
					<h2 className="text-[#1D1D1B] text-[38px] font-bold leading-[1] mb-5">
						WHY US
					</h2>
					<div className="text-base text-[#1D1D1B] text-left align-baseline leading-[1.6] font-light">
						<p className="mb-5">
							We are the sole Jofemar distributor for more than 28
							years in Australia and have imported, operated, and
							supplied in excess of 10,000 Jofemar vending
							machines to the Australian market. We continue to
							operate and provide servicing and support for all
							Jofemar equipment Australia- wide.
						</p>
						<p className="mb-5">
							Automated Retail Technologies provides a full level
							of support – IT backup, spare parts, vending machine
							equipment maintenance, installation services and
							training across all states and ongoing training to
							staff at no cost.
						</p>
						<p>
							Our factory trained team has extensive technical
							knowledge of all aspects of the operations of the
							vending machines with technical support not just in
							the APAC region but direct channels within the
							Jofemar factory in Spain.
						</p>
					</div>
				</div>
				<div className="flex-1 basis-1/2">
					<FormLayout />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
