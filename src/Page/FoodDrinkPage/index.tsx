import Footer from '../../Components/base/Footer';
import Header from '../../Components/base/Header';
import FoodItem from '../../Components/FoodItem';
import SubmitForm from '../../Components/Form';

const FoodAndDrinkPage = () => {
	return (
		<div className="h-full">
			<Header type="sub" />
			<FoodItem />
			<SubmitForm />
			<Footer />
		</div>
	);
};

export default FoodAndDrinkPage;
