import accelerators from '../accelarators';

const reload = {
  label: 'Reload',
  accelerator: accelerators.RELOAD,
  click(_, focusedWindow) {
    if (focusedWindow) focusedWindow.reload();
  }
};

const devTools = {
  label: 'Toggle Developer Tools',
  accelerator: accelerators.TOGGLE_DEVTOOLS,
  click(_, focusedWindow) {
    if (focusedWindow)
      focusedWindow.webContents.toggleDevTools();
  }
};

const kill = {
  label: 'Kill Process',
  accelerator: accelerators.KILL,
  click() {
    process.exit(0);
  }
};

export const DevelopmentMenu = {
  label: 'Development',
  submenu: [
    reload,
    devTools,
    kill
  ]
};
