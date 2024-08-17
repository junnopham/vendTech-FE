import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTtitle';
import { GetProp, Modal, notification, Table, TableProps } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import { formatTime } from '../../../util/date-time';
import { DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import {
	deleteGuestInfo,
	getGuestInfo,
} from '../../../service/guestinfo.service';
import withAuth from '../../../Components/Admin/withAuth';

import './style.css';

const { confirm } = Modal;

const GuestInfo = () => {
	useTitle('Guest Info');
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

	const columns: ColumnsType<GuestInfo> = [
		{
			title: 'ID',
			key: 'index',
			render: (text, record, index) => index + 1,
		},
		{
			title: 'First Name',
			dataIndex: 'firstName',
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
		},
		{
			title: 'Email',
			dataIndex: 'email',
		},
		{
			title: 'Phone Number',
			dataIndex: 'phoneNumber',
		},
		{
			title: 'Message',
			dataIndex: 'message',
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
						<DeleteOutlined
							onClick={(event) => handleDelete(record)}
							style={{ fontSize: '16px', cursor: 'pointer' }}
						/>
					</div>
				);
			},
		},
	];

	const [data, setData] = useState<GuestInfo[]>();
	const [loading, setLoading] = useState(false);
	const [reload, setReload] = useState(false);
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});

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

	const handleDelete = (record: GuestInfo) => {
		confirm({
			title: 'Are you sure delete this guest?',
			icon: <ExclamationCircleFilled />,
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				deleteGuestInfo(record._id)
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
		getGuestInfo(
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

	return (
		<>
			{contextHolder}
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

export default withAuth(GuestInfo);
