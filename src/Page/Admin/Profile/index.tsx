import React, { useEffect, useState } from 'react';
import './style.css';
import useTitle from '../../../hooks/useTtitle';
import { GetProp, notification, Table, TableProps } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { EditOutlined } from '@ant-design/icons';
import { getUsers } from '../../../service/user.service';
import { formatTime } from '../../../util/date-time';
import withAuth from '../../../Components/Admin/withAuth';

const User = () => {
	useTitle('Users');
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

	const columns: ColumnsType<User> = [
		{
			title: 'ID',
			key: 'index',
			render: (text, record, index) => index + 1,
		},
		{
			title: 'Username',
			dataIndex: 'username',
		},
		{
			title: 'Email',
			dataIndex: 'email',
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
						<EditOutlined
							onClick={(event) => editUser(record)}
							style={{ fontSize: '16px', cursor: 'pointer' }}
						/>
					</div>
				);
			},
		},
	];

	const [data, setData] = useState<User[]>();
	const [loading, setLoading] = useState(false);
	const [reload, setReload] = useState(false);
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
	const [editId, setEditId] = useState<string | null>(null);

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

	const editUser = (record: User) => {
		setEditId(record._id);
	};

	const onCloseModal = () => {
		setEditId(null);
	};

	const fetchData = () => {
		setLoading(true);
		getUsers(
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

	const handleUpdate = (updatedUser: User) => {};

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

export default withAuth(User);
