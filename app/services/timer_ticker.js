import store from '../store';
import { timerTick } from '../actions/timer';
import { getTickInterval } from '../reducers';

const select = (state) => state.timer.running;
const getDefaultInterval = () => getTickInterval(store.getState());
const makeTimerTicks = (interval) => {
  let currentInterval = null;

  return () => {
    const isRunning = select(store.getState());

    if (!currentInterval && isRunning) {
      currentInterval = setInterval(() => {
        store.dispatch(timerTick());
      }, interval || getDefaultInterval());
    }

    if (currentInterval && !isRunning) {
      clearTimeout(currentInterval);
      currentInterval = null;
    }
  };
};


store.subscribe(makeTimerTicks());
