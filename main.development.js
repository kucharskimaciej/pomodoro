import {app, BrowserWindow, shell} from 'electron';
import {openContextMenu} from './app/desktop/context_menu';

let mainWindow = null;


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
  app.quit();
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 600,
    height: 400,
    maximizable: false
  });

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
