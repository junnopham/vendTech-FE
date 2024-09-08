type IProps = {
	items: ICard[];
};
type ICard = {
	id: number;
	title: string;
	contents: string[];
	url: string;
};
const Card = (props: IProps) => {
	const { items } = props;
	return (
		<div className="flex flex-wrap justify-center items-start sm:px-28">
			{items.map((item) => {
				return (
					<div
						key={item.id}
						className="flex flex-col flex-1 basis-1/3 px-20 max-w-[500px]"
					>
						<div className="flex justify-center my-3">
							<img
								src={item.url}
								loading="lazy"
								decoding="async"
								style={{
									minWidth: 220,
									maxWidth: 242,
									minHeight: 220,
									maxHeight: 242,
								}}
							/>
						</div>
						<div
							className="mb-4 text-center text-xl font-bold"
							style={{ color: '#52B2BF' }}
						>
							{item?.title}
						</div>
						<ul className="text-center">
							{item.contents.map((content, index, arr) => {
								let list = (
									<li
										className="font-thin"
										style={{ lineHeight: '32px' }}
										key={index}
									>
										{content}
									</li>
								);
								if (arr.length > 1) {
									list = (
										<li
											className="font-thin"
											style={{ lineHeight: '32px' }}
											key={index}
										>
											- {content}
										</li>
									);
								}
								
								return list;
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
