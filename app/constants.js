export const actions = Object.freeze({
  TIMER_START: 'TIMER_START',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_BREAK: 'TIMER_BREAK',
  TIMER_TICK: 'TIMER_TICK'
});

export const timerStatus = Object.freeze({
  STOPPED: Symbol('timer stopped'),
  RUNNING: Symbol('timer_running'),
  BREAK: Symbol('timer_break')
});
