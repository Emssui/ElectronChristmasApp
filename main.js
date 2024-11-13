const { app, BrowserWindow, Menu, ipcMain } = require('electron/main');
const path = require('path');

Menu.setApplicationMenu(null);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 450,
        height: 600,
        frame: false,      
        resizable: false,  
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false 
        },
        icon: path.join(__dirname, 'assets/images/crown.png') 
    });

    win.loadFile('index.html');
};

ipcMain.on('close-app', (event) => {
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) {
        window.close(); 
    }
});

app.whenReady().then(() => {
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

if (require('electron-squirrel-startup')) app.quit();