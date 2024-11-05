const { app, BrowserWindow, Menu, ipcMain } = require('electron/main');

// Disable the default application menu
Menu.setApplicationMenu(null);

const createWindow = () => {
    const win = new BrowserWindow({
        width: 450,
        height: 600,
        frame: false,      
        resizable: false,  
        webPreferences: {
            preload: __dirname + '/preload.js', 
            contextIsolation: true,
            enableRemoteModule: false 
        }
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
