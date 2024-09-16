import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';
import { getFoodDrink } from '../../service/foodanddrink.services';
import FoodItem from '../../Components/FoodItem';
import FormSubmit from '../../Components/FormSubmit';

const FoodDrinkDetailPage = () => {
	let { id } = useParams();

	const [list, setList] = useState<[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalItems, setTotalItems] = useState<number>(9);
	const pageSize = 9;

	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		getFoodDrink(pageSize, currentPage, id).then((res) => {
			setList(res?.data);
			setTotalItems(res?.total);
		});
	}, [currentPage]);
	return (
		<div className="h-full">
			<div className=" py-[50px] bg-[#F5F5F5] flex flex-col w-full md:px-24 2xl:px-48">
				<div className="flex flex-wrap justify-center">
					{list?.map((item: any) => (
						<div
							className="px-[50px] py-[30px] mx-[5px] mb-[10px] min-h-[430px] min-w-[350px] flex-1 md:basis-1/3 xl:basis-1/4 lg:max-w-[350px] "
							key={item?._id}
						>
							<div className="mb-5 h-[250px]  flex justify-center items-center">
								<img
									src={item?.image.url}
									className="h-full w-full object-contain"
								/>
							</div>
							<h2 className="text-[#290e30] text-[25px] text-center font-bold">
								{item?.name}
							</h2>
							<div className="text-[#1D1D1B] text-[15px] text-center mb-5">
								<p>{item?.description}</p>
							</div>
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
			<FoodItem />
			<FormSubmit />
		</div>
	);
};

export default FoodDrinkDetailPage;
