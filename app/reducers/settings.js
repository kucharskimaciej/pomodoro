function getInitialSettingsState() {
  return {
    sessionDuration: 25,
    breakDuration: 5,
    tickInterval: 1
  };
}

export default function(state = getInitialSettingsState(), action) {
  switch (action.type) {
    default: return state;
  }
}
