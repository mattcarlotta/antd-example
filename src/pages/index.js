import React from "react";
import dynamic from "next/dynamic";
import "antd/dist/antd.min.css";

const Table = dynamic(() => import("antd").then((mod) => mod.Table), {
  ssr: false,
});

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default () => <Table dataSource={dataSource} columns={columns} />;
