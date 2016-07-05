function getInitialSettingsState() {
  return {
    duration: 30,
    tickInterval: 1
  };
}

export default function(state = getInitialSettingsState(), action) {
  switch (action.type) {
    default: return state;
  }
}
