import store from './store';

import { runTimer, timerTick } from './actions/timer';

const duration = 5;

const select = (state) => state.timer.running;
const makeTimerTicks = (interval = 1000) => {
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

store.dispatch(runTimer(duration));
