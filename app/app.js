import store from './store';

import { startTimer, stopTimer, timerTick } from './actions/timer';


const duration = 30;
store.dispatch(startTimer(duration));

const tickInterval = setInterval(() => {
  store.dispatch(timerTick());
}, 1000);

setTimeout(() => {
  clearInterval(tickInterval);
  store.dispatch(stopTimer());
}, duration * 1000);
