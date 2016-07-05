import { combineReducers } from 'redux';
import moment from 'moment';

import timer from './timer';
import settings from './settings';

export default combineReducers({
  timer,
  settings
});

export const getTimer = state => state.timer;
export const isTimerRunning = state => getTimer(state).running;

export const getEndTime = state =>
  moment(getTimer(state).startedAt).add(getTimerDuration(state), 'seconds');

export const getRemainingTime = state => {
  if (getTimer(state).running) {
    return getEndTime(state).diff(moment());
  }

  return moment().add(25, 'minutes').diff(moment());
};

export const getTimerDuration = state => state.settings.duration;
export const getTickInterval = state => state.settings.tickInterval * 1000;
