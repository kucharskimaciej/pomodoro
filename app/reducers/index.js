import { combineReducers } from 'redux';
import moment from 'moment';

import timer from './timer';

export default combineReducers({
  timer
});

export const getTimer = state => state.timer;

export const getEndTime = state =>
  moment(getTimer(state).startedAt).add(getTimer(state).duration, 'seconds');

export const getRemainingTime = state => {
  if (getTimer(state).running) {
    return getEndTime(state).diff(moment());
  }

  return moment().add(25, 'minutes').diff(moment());
};
