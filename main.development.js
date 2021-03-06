import { app, BrowserWindow } from 'electron';
import { openContextMenu } from './app/desktop/context_menu';
import getApplicationWindow from './app/desktop/app_window';

import './app/desktop/application_menu';

let mainWindow = null;


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
  app.quit();
});


app.on('ready', () => {
  mainWindow = getApplicationWindow();

  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', openContextMenu(mainWindow));
  }
});
