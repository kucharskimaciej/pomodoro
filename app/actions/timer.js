import { actions } from '../constants';

export const startTimer = (durationInSeconds, startTime = Date.now()) => ({
  type: actions.TIMER_START,
  payload: {
    startTime, durationInSeconds
  }
});

export const stopTimer = () => ({
  type: actions.TIMER_STOP
});

export const timerTick = () => ({
  type: actions.TIMER_TICK
});
