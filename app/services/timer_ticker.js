import store from '../store';
import { timerTick } from '../actions/timer';
import { getTickInterval } from '../reducers'

const select = (state) => state.timer.running;
const makeTimerTicks = (interval = getTickInterval()) => {
  let currentInterval = null;

  return () => {
    const isRunning = select(store.getState());

    if (!currentInterval && isRunning) {
      currentInterval = setInterval(() => {
        store.dispatch(timerTick());
      }, interval);
    }

    if (currentInterval && !isRunning) {
      clearTimeout(currentInterval);
      currentInterval = null;
    }
  };
};


store.subscribe(makeTimerTicks());
