import { platform } from './constants';

export default Object.freeze({
  TOGGLE_DEVTOOLS: platform.OSX ? 'Alt+Command+I' : 'Ctrl+Shift+I',
  RELOAD: 'CmdOrCtrl+R',
  KILL: 'CmdOrCtrl+Q'
});
