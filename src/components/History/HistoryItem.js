import React from "react";
import { List, Avatar, Button, Skeleton } from 'antd';

import "./styles.css";

function renderTime(time) {
  return time.toUTCString();
}

export default function History({ historyItem }) {
  console.log(historyItem);
  const { startDate, stopDate } = historyItem;
  const len = Math.floor((stopDate - startDate) / 1000);

  return (
    <div className={"History"}>
      <List.Item
        className={"History__List__Item"}
      >
        <Skeleton avatar title={false} loading={false} active>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">title</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <div>content</div>
        </Skeleton>
      </List.Item>
    </div>
  );
}

/*
    <li className="History__list__item" key={historyItem.id}>
      <div className="History__list__item__row">{`${len}`}</div>
      <div className="History__list__item__row">{`${renderTime(
        startDate
      )}`}</div>
      <div className="History__list__item__row">{`${renderTime(
        stopDate
      )}`}</div>
    </li>

*/