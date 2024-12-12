const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'; // Disable security warnings for development

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload script for IPC
    },
    autoHideMenuBar: true,
    nodeIntegration: true,
    contextIsolation: false,
  });

  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html')); // Ensure correct path
  mainWindow.webContents.openDevTools(); // Open DevTools
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Listen for navigation events from the renderer
ipcMain.on('navigate-back', () => {
  if (mainWindow.webContents.canGoBack()) {
    mainWindow.webContents.goBack();
  }
});

ipcMain.on('navigate-forward', () => {
  if (mainWindow.webContents.canGoForward()) {
    mainWindow.webContents.goForward();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
