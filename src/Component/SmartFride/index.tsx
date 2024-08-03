import morsl02 from '../../asset/morsl-02.png';
const SmartFridge = () => {
	return (
		<div className="flex pt-28">
			<div className="pl-3 pr-3">
				<img src={morsl02} />
			</div>
			<div className="flex flex-col justify-center pl-3 pr-3">
				<h3
					className="font-bold text-3xl text-main mb-2"
					style={{ color: '#e7592a', lineHeight: '64px' }}
				>
					Morsl Smart Fridge
				</h3>
				<p className="mb-6 font-light">
					Our innovative, AI powered food solution, serving fresh and
					healthy options in smaller workplaces and public spaces.
				</p>
				<p className="mb-6 font-light">
					Customers simply tap a credit/debit card or scan the QR code
					to open the door, take their desired products and then close
					the door to be automatically charged for their selection.
				</p>
			</div>
		</div>
	);
};

export default SmartFridge;
