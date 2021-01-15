import { TRACKING_START, TRACKING_STOP, HISTORY_LOAD } from "./consts";

// Описаываем action creator
export const createTrackingStartAction = (goodId) => {
  return {
    type: TRACKING_START,
    payload: goodId
  };
};

export const createTrackingStopAction = (goodId) => {
  return {
    type: TRACKING_STOP,
    payload: goodId
  };
};

export const createHistoryLoadAction = () => {
  return (dispatch, _, { api }) => {
    api.loadHistory().then((data) => {
      console.log(data);
      dispatch({
        type: HISTORY_LOAD,
        payload: data
      });
    });
  };
};
