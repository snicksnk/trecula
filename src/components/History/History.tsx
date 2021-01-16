import React from "react";
import { Table } from 'antd';
// import HistoryItem from "./HistoryItem";
import "./styles.css";

interface HistoryType {
  history: Array<any>
}

function renderTime(time: Date) {
  return time.toUTCString();
}

const columns = [
  {
    title: 'Duration',
    dataIndex: 'startTime',
    key: 'startTime',
    render: (_:any, { startDate, stopDate}: any) => Math.floor((stopDate - startDate) / 1000)
  },
  {
    title: 'Start',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (startDate: any) => renderTime(startDate),
  },
  {
    title: 'Stop',
    dataIndex: 'stopDate',
    key: 'stopDate',
    render: (stopDate: any) => renderTime(stopDate)
  },
]

export default function History({ history }: HistoryType) {
  return (
    <div className={"History"}>
      <Table columns={columns} dataSource={history} />
    </div>
  );
}
