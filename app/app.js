import store from './store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './components/root';
import React from 'react';

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root')
);

import { runTimer, timerTick } from './actions/timer';

const duration = 30;

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
