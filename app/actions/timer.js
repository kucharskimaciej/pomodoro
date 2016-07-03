import { actions } from '../constants';
import { delay } from '../lib/time_as_promise';


const startTimer = (durationInSeconds, startTime) => ({
  type: actions.TIMER_START,
  payload: {
    startTime, durationInSeconds
  }
});

const stopTimer = () => ({
  type: actions.TIMER_STOP
});

export const runTimer = (durationInSeconds, startTime = Date.now()) => (dispatch) => {
  dispatch(startTimer(durationInSeconds, startTime));
  return delay(durationInSeconds).then(() => dispatch(stopTimer()));
};

export const timerTick = () => ({
  type: actions.TIMER_TICK
});
