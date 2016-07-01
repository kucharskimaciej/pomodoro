import { Menu } from 'electron';

import { DevelopmentMenu } from './development';
import { ApplicationMenu } from './app';

const template = [
  ApplicationMenu
];

if (process.env.NODE_ENV === 'development') {
  template.push(DevelopmentMenu);
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
