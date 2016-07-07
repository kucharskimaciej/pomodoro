import { actions, timerStatus } from '../constants';

function getInitialTimerState() {
  return {
    state: timerStatus.STOPPED
  };
}

export default function timerReducer(state = getInitialTimerState(), action) {
  switch (action.type) {
    case actions.TIMER_START:
      return {
        running: timerStatus.RUNNING,
        startedAt: action.payload.startTime.toDate(),
        elapsed: 0
      };

    case actions.TIMER_BREAK:
      return {
        ...state,
        running: timerStatus.BREAK
      };

    case actions.TIMER_STOP:
      return {
        ...state,
        running: timerStatus.STOPPED
      };

    case actions.TIMER_TICK:
      return { ...state };

    default:
      return state;
  }
}
