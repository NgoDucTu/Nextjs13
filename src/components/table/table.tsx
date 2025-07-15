'use client';

import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  id: string;
  name: string;
  age: number;
  username: string;

}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    username: 'john_brown',
   
  },
  {
    id: '2',
    name: 'Jim Green',
    age: 42,
    username: 'jim_green',
   
  },
  {
    id: '3',
    name: 'Joe Black',
    age: 32,
    username: 'joe_black',
 
  },
];

const DataTable: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default DataTable;