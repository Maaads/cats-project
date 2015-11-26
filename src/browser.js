import app from 'app';
import BrowserWindow from 'browser-window';
import path from 'path';
import {
    ipcMain
}
from 'electron';
import yargs from 'yargs';

var args = yargs(process.argv.slice(1)).wrap(100).argv;

var startupTime = new Date().getTime();

var parseTime = (s) => {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    return mins + ' minutes ' + secs + '.' + ms + ' seconds';
}

ipcMain.on('app:startup', (event, time) => {
    console.log('App Startup Time:', parseTime(Math.floor(time - startupTime)));
});


app.on('ready', () => {

    var mainWindow = new BrowserWindow({
        width: 637,
        height: 514,
        'standard-window': true,
        'auto-hide-menu-bar': true,
        resizable: true,
        title: 'Cats!',
        center: true,
        frame: true,
        show: false
    });

    if (args.dev) {
        mainWindow.show();
        mainWindow.toggleDevTools();
        mainWindow.focus();
        console.info('Dev Mode Active: Developer Tools Enabled.');
    }

    mainWindow.loadURL(path.normalize('file://' + path.join(__dirname, '../index.html')));


    mainWindow.webContents.on('new-window', (e) => {
        e.preventDefault();
    });

    mainWindow.webContents.on('will-navigate', (e, url) => {
        if (url.indexOf('build/index.html#') < 0) {
            e.preventDefault();
        }
    });

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle('Cats!');
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('close', app.quit);


    ipcMain.on('app:bitchForAttention', (event, state = true) => { //Gonna leave this for _reasons_
        if (!mainWindow.isFocused())
            mainWindow.flashFrame(state);
    });

});

app.on('window-all-closed', () => {
    app.quit();
});