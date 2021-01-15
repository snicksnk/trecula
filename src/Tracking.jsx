import React, { useEffect, useState } from "react";

import "./styles.css";

export default function App({ trackingData, onStartTracking, onStoptracking }) {
  const { startDate } = trackingData;
  const [duration, setDuration] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (startDate) {
        const duration = Math.floor((new Date() - startDate) / 1000);
        setDuration(duration);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="Tracking">
      <h1>Tracking</h1>
      <div>{startDate && duration}</div>
      {!startDate && <button onClick={onStartTracking}>start</button>}
      {startDate && <button onClick={onStoptracking}>stop</button>}
    </div>
  );
}
