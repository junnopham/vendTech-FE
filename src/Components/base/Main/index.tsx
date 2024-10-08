import MicroMarket from '../../MicroMarket';
import SmartFridge from '../../SmartFride';
import OfficeWorks from '../../OfficeWorks';
import OurService from '../../OurService';
import OurProduct from '../../OurProduct';
import Benefit from '../../Benefit';
import Employee from '../../Employee';
import ImageIntro from '../../ImageIntro';
import FormSubmit from '../../FormSubmit';

const Main = () => {
	return (
		<>
			<div className="lg:px-28 py-0">
				<MicroMarket />
				<SmartFridge />
			</div>
			<OfficeWorks />
			<div className="lg:px-28 py-0">
				<OurService />
				<OurProduct />
				<Benefit />
			</div>
			<Employee />
			<ImageIntro />
			<FormSubmit />
		</>
	);
};

export default Main;
