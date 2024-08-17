import { useEffect, useState } from 'react';
import './style.css';
import {
  deleteProductById,
  getProducts,
} from '../../../service/product.service';
import { GetProp, Modal, notification, Table, TableProps } from 'antd';
import type { SorterResult } from 'antd/es/table/interface';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import EditProductModal from '../../../Components/Admin/EditProductModal';
import withAuth from '../../../Components/Admin/withAuth';
import useTitle from '../../../hooks/useTtitle';

const { confirm } = Modal;
const Products = () => {
  useTitle('Products');
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
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: '30%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '50%',
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
      },
    },
  ];

  const [data, setData] = useState<Product[]>();
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

  const editProduct = (record: Product) => {
    setEditId(record._id);
  };

  const onCloseModal = () => {
    setEditId(null);
  };

  const deleteProduct = (record: Product) => {
    confirm({
      title: 'Are you sure delete this product?',
      icon: <ExclamationCircleFilled />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteProductById(record._id)
          .then((res) => {
            setReload(!reload);
            const deleteInfo: { type: NotificationType; message: string } = {
              type: 'success',
              message: 'Delete successfully!',
            };
            openNotificationWithIcon(deleteInfo.type, deleteInfo.message);
          })
          .catch((err) => {
            const deleteInfo: { type: NotificationType; message: string } = {
              type: 'error',
              message: 'Delete fail!',
            };
            openNotificationWithIcon(deleteInfo.type, deleteInfo.message);
          });
      },
    });
  };

  const fetchData = () => {
    setLoading(true);
    getProducts(
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

  const handleUpdate = (updatedProduct: Product) => {
    setData(
      (prevData) =>
        prevData?.map((item) =>
          item._id === updatedProduct._id ? updatedProduct : item
        ) || []
    );
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
      {editId && (
        <EditProductModal
          id={editId}
          onClose={onCloseModal}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default withAuth(Products);
