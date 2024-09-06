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
		getFoodDrink(9, currentPage, id).then((res) => {
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
							className="w-full h-48 p-2 bg-white-200
                        border-2 border-slate-200
                        rounded-lg flex flex-row
                        mx-auto mt-6"
						>
							<div className="w-3/12 h-full flex items-center">
								<img
									className="pl-4 pt-2 w-72 h-auto"
									src={item.image.url}
								/>
							</div>
							<div className="w-6/12 h-full p-2 ">
								<h3 className="pl-4 pt-2 text-2xl font-medium">
									{item.name}
								</h3>
								<span className="px-4">{item.description}</span>
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
