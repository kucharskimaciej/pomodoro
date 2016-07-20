import { BrowserWindow } from 'electron';
import { dimensions } from './constants';

export default function getApplicationWindow() {
  const windowOptions = {
    show: false,
    width: dimensions.APP_WIDTH,
    height: dimensions.APP_HEIGHT,
    maximizable: false
  };

  if (process.platform === 'darwin') {
    Object.assign(windowOptions, {
      titleBarStyle: 'hidden'
    });
  }

  if (['freebsd', 'linux', 'sunos'].indexOf(process.platform) !== -1) {
    Object.assign(windowOptions, {
      frame: false
    });
  }

  return new BrowserWindow(windowOptions);
}
