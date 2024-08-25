const Benefit = () => {
	return (
		<div className="pt-10 lg:pt-20 px-3 flex flex-col justify-center items-center">
			<h3
				className="py-12 text-center"
				style={{ color: '#9fa07c', fontSize: 28, lineHeight: '64px' }}
			>
				Why Vend Tech?
			</h3>
			<div className="flex flex-col md:flex-row flex-wrap md:justify-center lg:justify-normal">
				<div className="md:p-10 lg:p-18 flex-1 basis-1/3 lg:min-w-[400px] max-w-[500px] ">
					<h2
						style={{ color: '#52B2BF' }}
						className="text-center text-3xl font-extrabold mb-4"
					>
						Employer
					</h2>
					<p
						className="font-semibold text-center mb-4"
						style={{ color: '#52B2BF' }}
					>
						Benefits
					</p>
					<ul className="list-disc mb-8 text-base leading-8 font-thin pl-8">
						<li className="mb-1">
							Reduces absenteeism and presenteeism costs
						</li>
						<li>Significantly increases employee productivity</li>
						<li>
							Enhances company culture – attract and retain
							quality talent
						</li>
						<li> Flexible solutions to suit any operating mode </li>
					</ul>
				</div>
				<div className="md:p-10 lg:p-18 flex-1 basis-1/3 lg:min-w-[430px] max-w-[500px]">
					<h2
						style={{ color: '#52B2BF' }}
						className="text-center text-3xl font-extrabold mb-4"
					>
						Employee
					</h2>
					<p
						className="font-semibold text-center mb-4"
						style={{ color: '#52B2BF' }}
					>
						Benefits
					</p>
					<ul className="list-disc mb-8 text-base leading-8 font-thin pl-8">
						<li className="mb-1">
							Enhances personal health and wellbeing
						</li>
						<li>Save time during breaks</li>
						<li>
							Staff across all shifts receive the same level of
							food service
						</li>
						<li> Better morale and job satisfaction </li>
					</ul>
				</div>
				<div className="md:p-10 lg:p-18 flex-1 basis-1/3 lg:min-w-[430px] max-w-[500px]">
					<h2 className="text-center text-3xl font-extrabold mb-4 text-[#52B2BF]">
						Decision Maker
					</h2>
					<p className="font-semibold text-center mb-4 text-[#52B2BF]">
						Competitive Advantages
					</p>
					<ul className="list-disc mb-8 text-base leading-8 font-thin pl-8">
						<li className="mb-1">
							5 years unrivalled micro-market experience
						</li>
						<li>
							A proven model, trusted by Australia’s most
							prominent companies
						</li>
						<li>
							A diverse and high calibre support team to ensure
							success
						</li>
						<li>
							A diverse and high calibre support team to ensure
							success
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Benefit;
