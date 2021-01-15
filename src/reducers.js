import { TRACKING_START, TRACKING_STOP, HISTORY_LOAD } from "./consts";

// Определяем редюсер товаров

const trackingRudecerInitial = {
  startDate: null
};
export function trackingReducer(state = trackingRudecerInitial, action) {
  switch (action.type) {
    case TRACKING_START: {
      return { startDate: new Date() };
    }
    case TRACKING_STOP: {
      return { startDate: null };
    }
    default: {
      return state;
    }
  }
}

const historyRudecerInitial = [];
export function historyReducer(state = historyRudecerInitial, action) {
  switch (action.type) {
    case HISTORY_LOAD: {
      const history = action.payload;
      return history;
    }
    case TRACKING_STOP: {
      const { startDate, stopDate } = action.payload;
      return [{ startDate, stopDate }, ...state];
    }
    default: {
      return state;
    }
  }
}

// Определяем селекторы

export const getTracking = (state) => state.trackingReducer;
export const getHistory = (state) => state.historyReducer;
