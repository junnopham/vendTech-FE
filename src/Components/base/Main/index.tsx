import MicroMarket from '../../MicroMarket';
import SmartFridge from '../../SmartFride';
import OfficeWorks from '../../OfficeWorks';
import OurService from '../../OurService';
import OurProduct from '../../OurProduct';
import Benefit from '../../Benefit';
import Employee from '../../Employee';
import ImageIntro from '../../ImageIntro';
import SubmitForm from '../../Form';

const Main = () => {
	return (
		<>
			<div className="px-28 py-0">
				<MicroMarket />
				<SmartFridge />
			</div>
			<OfficeWorks />
			<div className="px-28 py-0">
				<OurService />
				<OurProduct />
				<Benefit />
			</div>
			<Employee />
			<ImageIntro />
			<SubmitForm />

		</>
	);
};

export default Main;
