import {Menu} from 'electron';

export const openContextMenu = appWindow => (evt, props) => {
    "use strict";
    const { x, y } = props;
    
    Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
            appWindow.inspectElement(x, y);
        }
    }]).popup(appWindow);
};