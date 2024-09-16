import React, { useEffect, useState } from 'react';
import './style.css';
import useTitle from '../../../hooks/useTtitle';
import {
	Button,
	GetProp,
	Modal,
	notification,
	Table,
	TableProps,
	Tooltip,
} from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { formatTime } from '../../../util/date-time';
import {
	DeleteOutlined,
	EditOutlined,
	ExclamationCircleFilled,
	EyeOutlined,
} from '@ant-design/icons';
import {
	deleteCategoryById,
	getCategories,
} from '../../../service/category.service';
import withAuth from '../../../Components/Admin/withAuth';
import { Link, useNavigate } from 'react-router-dom';

const { confirm } = Modal;

const ListCategory = () => {
	useTitle('Micro market solutions');
	const navigate = useNavigate();
	type ColumnsType<T> = TableProps<T>['columns'];
	type TablePaginationConfig = Exclude<
		GetProp<TableProps, 'pagination'>,
		boolean
	>;

	interface TableParams {
		pagination?: TablePaginationConfig;
		sortField?: SorterResult<any>['field'];
		sortOrder?: SorterResult<any>['order'];
		filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
	}

	const columns: ColumnsType<Category> = [
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
			},
		},
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Description',
			dataIndex: 'description',
		},
		{
			title: 'Created At',
			dataIndex: 'createdAt',
			render: (text, record, index) => formatTime(record.createdAt),
		},
		{
			title: 'Updated At',
			dataIndex: 'updatedAt',
			render: (text, record, index) => formatTime(record.updatedAt),
		},
		{
			title: 'Action',
			dataIndex: 'action',
			width: '10%',
			render: (text, record, index) => {
				return (
					<div className="action-row">
						<Tooltip title="View">
							<Link to={'view/' + record._id}>
								<EyeOutlined
									style={{
										fontSize: '16px',
										cursor: 'pointer',
									}}
								/>
							</Link>
						</Tooltip>
						<Tooltip title="Edit">
							<EditOutlined
								onClick={(event) => handleEdit(record)}
								style={{ fontSize: '16px', cursor: 'pointer' }}
							/>
						</Tooltip>
						<Tooltip title="Delete">
							<DeleteOutlined
								onClick={(event) => handleDelete(record)}
								style={{ fontSize: '16px', cursor: 'pointer' }}
							/>
						</Tooltip>
					</div>
				);
			},
		},
	];

	const [data, setData] = useState<Category[]>();
	const [loading, setLoading] = useState(false);
	const [reload, setReload] = useState(false);
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
	const [category, setCategory] = useState<Category | null>(null);

	const [api, contextHolder] = notification.useNotification();
	type NotificationType = 'success' | 'info' | 'warning' | 'error';
	const openNotificationWithIcon = (
		type: NotificationType,
		message?: string,
		description?: string
	) => {
		api[type]({
			message,
			description,
		});
	};

	const handleAdd = () => {
		navigate('add');
	};

	const handleEdit = (record: Category) => {
		navigate('edit/' + record._id);
	};

	const handleDelete = (record: Category) => {
		confirm({
			title: 'Are you sure delete this category?',
			icon: <ExclamationCircleFilled />,
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				deleteCategoryById(record._id)
					.then((res) => {
						setReload(!reload);
						const deleteInfo: {
							type: NotificationType;
							message: string;
						} = {
							type: 'success',
							message: 'Delete successfully!',
						};
						openNotificationWithIcon(
							deleteInfo.type,
							deleteInfo.message
						);
					})
					.catch((err) => {
						const deleteInfo: {
							type: NotificationType;
							message: string;
						} = {
							type: 'error',
							message: 'Delete fail!',
						};
						openNotificationWithIcon(
							deleteInfo.type,
							deleteInfo.message
						);
					});
			},
		});
	};

	const fetchData = () => {
		setLoading(true);
		getCategories(
			tableParams.pagination?.pageSize || 10,
			tableParams.pagination?.current || 0
		).then((results) => {
			setData(results.data);
			setLoading(false);
			setTableParams({
				...tableParams,
				pagination: {
					...tableParams.pagination,
					showSizeChanger: true,
					pageSizeOptions: ['10', '20', '30', '40', '50'],
					total: results.total,
				},
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, [
		tableParams.pagination?.current,
		tableParams.pagination?.pageSize,
		reload,
	]);

	const handleTableChange: TableProps['onChange'] = (pagination) => {
		setTableParams({
			pagination,
		});
		if (pagination.pageSize !== tableParams.pagination?.pageSize) {
			setData([]);
		}
	};

	const handleUpdate = (updatedCategory: Category) => {
		setReload(!reload);
	};

	const onCloseModal = () => {
		setCategory(null);
	};

	return (
		<>
			{contextHolder}
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginBottom: 16,
				}}
			>
				<Button type="primary" onClick={handleAdd}>
					Add
				</Button>
			</div>
			<Table
				scroll={{ x: 768 }}
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

export default withAuth(ListCategory);
