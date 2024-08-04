import React from 'react';
import { Carousel } from 'antd';
import { employeeDescriptions } from '../../const';

const contentStyle: React.CSSProperties = {
	margin: 0,
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79'
};

const Employee: React.FC = () => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	return (
		<div
			style={{
				backgroundImage:
					'url(https://www.morsl.com.au/wp-content/uploads/2021/08/Side-fruits-both-44.svg)',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
			className="px-36"
		>
			<Carousel
				afterChange={onChange}
				draggable
				autoplay
				className="pb-10"
			>
				{employeeDescriptions.map((employee) => {
					return (
						<div>
							<div className="flex pb-10">
								<div
									style={{ flex: '1 1 40%', minHeight: 700 }}
									className="pl-12 relative"
								>
									<div
										style={{
											background:
												'rgba(41, 14, 48, 0.18)',
											width: '368px',
											height: '540px'
										}}
										className="absolute z-10"
									></div>
									<img
										src={employee.url}
										className="absolute z-20"
										style={{
											top: 36,
											left: 72,
											width: '368px',
											height: '540px'
										}}
									/>
								</div>
								<div
									style={{ flex: '1 1 40%' }}
									className="pl-12 pr-9 text-left"
								>
									<p
										className="flex flex-col pb-8 font-thin"
										style={{
											fontSize: 22,
											lineHeight: '36px'
										}}
									>
										<span
											className="text-7xl font-extralight truncate"
											style={{
												color: '#290e30!important'
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
												color: '#290e30'
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
								<div style={{ flex: '1 1 10%' }}></div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Employee;
