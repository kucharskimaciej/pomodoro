import { BrowserWindow } from 'electron';
import { dimensions, platform } from './constants';

export default function getApplicationWindow() {
  const windowOptions = {
    show: false,
    width: dimensions.APP_WIDTH,
    height: dimensions.APP_HEIGHT,
    maximizable: false
  };

  if (process.env.NODE_ENV !== 'development') {
    if (platform.OSX) {
      Object.assign(windowOptions, {
        titleBarStyle: 'hidden'
      });
    } else {
      Object.assign(windowOptions, {
        frame: false
      });
    }
  }

  return new BrowserWindow(windowOptions);
}
