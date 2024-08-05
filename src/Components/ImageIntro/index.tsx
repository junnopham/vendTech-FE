import React from 'react';
import { Anchor, Col, Row } from 'antd';

const ImageIntro: React.FC = () => (
	<Row className="flex flex-col pb-10">
		<Col
			span={16}
			className="flex
        "
		>
			<div
				id="part-1"
				style={{ height: '100vh', background: 'red', width: 200 }}
			/>
			<div
				id="part-2"
				style={{ height: '100vh', background: 'yellow', width: 200 }}
			/>
			<div
				id="part-3"
				style={{ height: '100vh', background: 'green', width: 200 }}
			/>
		</Col>
		<Col span={8}>
			<Anchor
				replace
				direction="horizontal"
				items={[
					{
						key: 'part-1',
						href: '#part-1',
						title: ''
					},
					{
						key: 'part-2',
						href: '#part-2',
						title: ''
					},
					{
						key: 'part-3',
						href: '#part-3',
						title: ''
					}
				]}
			/>
		</Col>
	</Row>
);

export default ImageIntro;
