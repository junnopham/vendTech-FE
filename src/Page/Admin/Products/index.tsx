import { useEffect, useState } from 'react';
import './style.css';
import { getProducts, deleteProductById } from '../../../service/user.service';
import type { GetProp, TableProps } from 'antd';
import { Table, Modal, notification, message } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import {
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleFilled
} from '@ant-design/icons';

const { confirm } = Modal;
const Products = () => {
	type ColumnsType<T> = TableProps<T>['columns'];
	type TablePaginationConfig = Exclude<
		GetProp<TableProps, 'pagination'>,
		boolean
	>;

	interface Product {
		_id: string;
		name: string;
		description: string;
		action: string;
		image: {
			name: string;
			type: string;
			url: string;
		};
	}

	interface TableParams {
		pagination?: TablePaginationConfig;
		sortField?: SorterResult<any>['field'];
		sortOrder?: SorterResult<any>['order'];
		filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
	}

	const columns: ColumnsType<Product> = [
		{
			title: 'Image',
			dataIndex: 'image',
			width: '10%',
			render: (text, record, index) => {
				return (
					<img
						style={{ height: '80px' }}
						src={record.image?.url || ''}
						alt=""
					/>
				);
			}
		},
		{
			title: 'Name',
			dataIndex: 'name',
			width: '30%'
		},
		{
			title: 'Description',
			dataIndex: 'description',
			width: '50%'
		},
		{
			title: 'Action',
			dataIndex: 'action',
			width: '10%',
			render: (text, record, index) => {
				return (
					<div className="action-row">
						<EditOutlined
							onClick={(event) => editProduct(record)}
							style={{ fontSize: '16px', cursor: 'pointer' }}
						/>
						<DeleteOutlined
							onClick={(event) => deleteProduct(record)}
							style={{ fontSize: '16px', cursor: 'pointer' }}
						/>
					</div>
				);
			}
		}
	];

	const [data, setData] = useState<Product[]>();
	const [loading, setLoading] = useState(false);
	const [reload, setReload] = useState(false);
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 10
		}
	});

	const editProduct = (record: Product) => {
		console.log('edit', record);
	};
	const [api, contextHolder] = notification.useNotification();
	type NotificationType = 'success' | 'info' | 'warning' | 'error';
	const openNotificationWithIcon = (
		type: NotificationType,
		message?: string,
		description?: string
	) => {
		api[type]({
			message,
			description
		});
	};

	const deleteProduct = (record: Product) => {
		confirm({
			title: 'Are you sure delete this product?',
			icon: <ExclamationCircleFilled />,
			content: 'Some descriptions',
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				deleteProductById(record._id).then((res) => {
					setReload(!reload);
					const deleteInfo :{type:NotificationType, message: string} = {
						type: 'success',
						message: 'Delete successfully!'
					}
					openNotificationWithIcon(deleteInfo.type, deleteInfo.message);
				}).catch((err) => {
					const deleteInfo :{type:NotificationType, message: string} = {
						type: 'error',
						message: 'Delete fail!'
					}
					openNotificationWithIcon(deleteInfo.type, deleteInfo.message);
				});
			}
		});
	};

	const fetchData = () => {
		setLoading(true);
		getProducts(
			tableParams.pagination?.pageSize || 10,
			tableParams.pagination?.current || 0
		).then((results) => {
			setData(results);
			setLoading(false);
			setTableParams({
				...tableParams,
				pagination: {
					...tableParams.pagination,
					showSizeChanger: true,
					pageSizeOptions: ['10', '20', '30', '40', '50'],
					total: 30
				}
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, [tableParams.pagination?.current, tableParams.pagination?.pageSize, reload]);

	const handleTableChange: TableProps['onChange'] = (pagination) => {
		setTableParams({
			pagination
		});
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};

	return (
		<>
			{contextHolder}
			<Table
				columns={columns}
				rowKey={(record) => record._id}
				dataSource={data}
				pagination={tableParams.pagination}
				loading={loading}
				onChange={handleTableChange}
			/>
		</>
	);
};

export default Products;
