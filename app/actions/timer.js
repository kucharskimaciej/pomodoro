import { actions } from '../constants';
import { delay } from '../lib/time_as_promise';
import moment from 'moment';

const startTimer = (durationInSeconds, startTime) => ({
  type: actions.TIMER_START,
  payload: {
    startTime, durationInSeconds
  }
});

export const stopTimer = () => ({
  type: actions.TIMER_STOP
});

export const runTimer = (durationInSeconds, startTime = moment()) => (dispatch) => {
  dispatch(startTimer(durationInSeconds, startTime));
  return delay(durationInSeconds).then(() => dispatch(stopTimer()));
};

export const timerTick = () => ({
  type: actions.TIMER_TICK
});
