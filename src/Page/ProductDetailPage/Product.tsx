import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { getProducts } from '../../service/product.service';
import SliderImage from './Slider';

const Product = (props: any) => {
	const { productId } = props;
	const [products, setProducts] = useState<[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalItems, setTotalItems] = useState<number>(9);

	const pageSize = 9;

	const onPageChange = (page: number) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		getProducts(9, currentPage, productId).then((res) => {
			setProducts(res?.data);
			setTotalItems(res?.total);
		});
	}, [currentPage]);

	return (
		<>
			<div className=" py-[50px] bg-[#F5F5F5] flex flex-col w-full md:px-24 2xl:px-48">
				<div className="flex flex-wrap justify-center">
					{products?.map((product: any) => (
						<div
							className="w-full p-2 bg-white
                        border-2 border-slate-200
                        rounded-lg flex flex-row
                        mx-auto mt-6"
						>
							<SliderImage data={product} />
							<div className="w-6/12 h-full p-2 ">
								<h3 className="pl-8 pt-2 text-2xl font-medium">
									{product.name}
								</h3>
								<span className="px-4">
									{product.description}
								</span>
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
		</>
	);
};

export default Product;
