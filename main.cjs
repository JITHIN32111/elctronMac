const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Secure preload script
      contextIsolation: true, // Recommended for security
      nodeIntegration: false, // Disable Node.js integration in renderer
      sandbox: true, // Extra security
    },
    autoHideMenuBar: true,
  });

  mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html')); // Load app
  mainWindow.webContents.openDevTools(); // Optional for dev only
}

app.whenReady().then(() => {
  createWindow();

  // Check for updates after app is ready
  autoUpdater.checkForUpdatesAndNotify();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Handle navigation events
ipcMain.on('navigate-back', () => {
  if (mainWindow.webContents.canGoBack()) mainWindow.webContents.goBack();
});

ipcMain.on('navigate-forward', () => {
  if (mainWindow.webContents.canGoForward()) mainWindow.webContents.goForward();
});

// Handle update events
ipcMain.on('install-update', () => {
  autoUpdater.quitAndInstall();
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update-available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update-downloaded');
});

autoUpdater.on('error', (error) => {
  mainWindow.webContents.send('update-error', error.message);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
