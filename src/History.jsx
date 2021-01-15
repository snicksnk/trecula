import React from "react";
import HistoryItem from "./HistoryItem";
import "./styles.css";

export default function History({ history }) {
  return (
    <ul className="App">
      {history.map((historyItem) => (
        <HistoryItem key={historyItem.key} historyItem={historyItem} />
      ))}
    </ul>
  );
}
