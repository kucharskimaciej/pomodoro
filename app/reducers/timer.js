import { actions } from '../constants';

function getInitialTimerState() {
  return {
    running: false
  };
}

export default function timerReducer(state = getInitialTimerState(), action) {
  const currentTime = Date.now();
  const elapsedTime = currentTime - state.startedAt;

  switch (action.type) {
    case actions.TIMER_START:
      return {
        running: true,
        duration: action.payload.durationInSeconds,
        startedAt: action.payload.startTime,
        elapsed: 0
      };

    case actions.TIMER_STOP:
      return {
        ...state,
        running: false
      };

    case actions.TIMER_TICK:
      return {
        ...state,
        elapsed: elapsedTime
      };

    default:
      return state;
  }
}
