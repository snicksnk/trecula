import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createTrackingStartAction,
  createTrackingStopAction,
  createHistoryLoadAction
} from "./actions";
import { getTracking, getHistory } from "./reducers";
import History from "./components/History";
import Tracking from "./Tracking";

import "./styles.css";

export default function Dashboard() {
  const trackingData = useSelector(getTracking);
  const history = useSelector(getHistory);

  const dispatch = useDispatch();

  const onStartTracking = () => {
    dispatch(createTrackingStartAction());
  };

  const onStopTracking = () => {
    dispatch(
      createTrackingStopAction({
        startDate: trackingData.startDate,
        stopDate: new Date()
      })
    );
  };

  useEffect(() => {
    dispatch(createHistoryLoadAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Tracking
        trackingData={trackingData}
        onStartTracking={onStartTracking}
        onStoptracking={onStopTracking}
      />
      <History history={history} />
    </div>
  );
}
