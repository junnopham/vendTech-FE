import FormSubmit from '../../Components/FormSubmit';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { getFoodDrinkCategories } from '../../service/foodanddrink.services';

const FoodAndDrinkPage = () => {
	const [categories, setCategories] = useState<[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalItems, setTotalItems] = useState<number>(9);
	const pageSize = 9;

	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		getFoodDrinkCategories(9, currentPage).then((res) => {
			setCategories(res?.data);
			setTotalItems(res?.total);
		});
	}, [currentPage]);
	return (
		<div className="h-full">
			<div className=" py-[50px] bg-[#F5F5F5] flex flex-col w-full md:px-24 2xl:px-48">
				<div className="flex flex-wrap justify-center">
					{categories?.map((category: any) => (
						<div
							className="bg-white  px-[50px] py-[30px] mx-[5px] mb-[10px] min-h-[430px] min-w-[350px] flex-1 md:basis-1/3 xl:basis-1/4 lg:max-w-[350px] "
							key={category?._id}
						>
							<div className="mb-5 h-[250px]  flex justify-center items-center">
								<img
									src={category?.image.url}
									className="h-full w-full object-contain"
								/>
							</div>
							<h2 className="text-[#1D1D1B] text-[25px] text-left font-medium uppercase">
								{category?.name}
							</h2>
							<div className="text-[#1D1D1B] text-[15px] text-left mb-5">
								<p>{category?.description}</p>
							</div>
							<div className="bg-[#1D1D1B] my-5 h-[1px]"></div>
							<Link to={`/food-and-drink/${category?._id}`}>
								<button className="bg-[#2D2E82] px-5 py-[10px] text-[15px] font-bold text-white">
									More Details
								</button>
							</Link>
						</div>
					))}
				</div>
				{totalItems > pageSize && (
					<Pagination
						className="justify-center"
						current={currentPage}
						total={totalItems}
						pageSize={pageSize}
						onChange={onPageChange}
					/>
				)}
			</div>
			<FormSubmit />
		</div>
	);
};

export default FoodAndDrinkPage;
