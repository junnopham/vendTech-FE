import React from 'react';
import { Carousel } from 'antd';
import { employeeDescriptions } from '../../const';

const contentStyle: React.CSSProperties = {
	margin: 0,
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

const Employee: React.FC = () => {
	const onChange = (currentSlide: number) => {};

	return (
		<div className="lg:px-36 bg-[#ecece5]">
			<Carousel
				afterChange={onChange}
				draggable
				autoplay
				className="pb-10"
			>
				{employeeDescriptions.map((employee, index) => {
					return (
						<div className="" key={index}>
							<div className="flex flex-col lg:flex-row flex-wrap justify-around lg:pb-10 px-8">
								<div className="lg:px-12 pb-10 max-w-[100%] md:min-h-[700px] flex-1 basis-full lg:basis-[40%]">
									<div
										style={{
											background:
												'rgba(41, 14, 48, 0.18)',
										}}
										className="relative z-10 w-[65vw] h-[90vw] sm:w-[368px] sm:h-[540px]"
									>
										<img
											src={employee.url}
											className="absolute z-20 w-[65vw] h-[90vw] top-[6%] left-[12%] sm:w-[368px] sm:h-[540px] sm:top-[36px] sm:left-[72px]"
										/>
									</div>
								</div>
								<div className="pl-12 pr-9 text-left flex-1 basis-full xl:basis-[60%]">
									<p
										className="flex flex-col pb-8 font-thin"
										style={{
											fontSize: 22,
											lineHeight: '36px',
										}}
									>
										<span
											className="text-7xl font-extralight truncate"
											style={{
												color: '#290e30!important',
											}}
										>
											”
										</span>
										{employee.description}
									</p>
									<span className="flex flex-col">
										<span
											className="text-base font-light opacity-70 mb-1"
											style={{
												lineHeight: '22px',
												color: '#290e30',
											}}
										>
											{employee.name}
										</span>
										<span
											className="text-sm font-thin opacity-60"
											style={{ color: '#290e30' }}
										>
											Officeworks
										</span>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Employee;
