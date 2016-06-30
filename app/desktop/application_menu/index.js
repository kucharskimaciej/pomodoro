import {Menu} from 'electron';

import {DevelopmentMenu} from './development';

const template = [];

if (process.env.NODE_ENV === 'development') {
  template.push(DevelopmentMenu);
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
