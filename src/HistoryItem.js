import React from "react";

import "./styles.css";

function renderTime(time) {
  return time.toUTCString();
}

export default function History({ historyItem }) {
  console.log(historyItem);
  const { startDate, stopDate } = historyItem;
  const len = Math.floor((stopDate - startDate) / 1000);

  return (
    <li className="History__list__item" key={historyItem.id}>
      <div className="History__list__item__row">{`${len}`}</div>
      <div className="History__list__item__row">{`${renderTime(
        startDate
      )}`}</div>
      <div className="History__list__item__row">{`${renderTime(
        stopDate
      )}`}</div>
    </li>
  );
}
