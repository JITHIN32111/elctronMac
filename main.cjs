const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const log = require('electron-log');

// Configure logging
log.transports.file.resolvePath = () =>
  path.join("C:/Users/seclob/Desktop/super/electron/elec", 'logs/main.log');

// Log the app version
log.info('App version: ' + app.getVersion());

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
  log.info('App is ready.');

  createWindow();

  // Check for updates once the app is ready
  autoUpdater.checkForUpdatesAndNotify();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Handle update events
autoUpdater.on('checking-for-update', () => {
  log.info('Checking for updates...');
  if (mainWindow) mainWindow.webContents.send('checking');
});

autoUpdater.on('update-available', () => {
  log.info('Update available.');
  if (mainWindow) mainWindow.webContents.send('update-available');
});

autoUpdater.on('update-not-available', () => {
  log.info('Update not available.');
  if (mainWindow) mainWindow.webContents.send('update-available');
});
autoUpdater.on('download-progress', (progressTrack) => {
  // Log progress details
  log.info('Download progress:', progressTrack);

  try {
    // Send progress details to the renderer
    if (mainWindow) {
      mainWindow.webContents.send('download-progress', {
        percent: progressTrack.percent,
        transferred: progressTrack.transferred,
        total: progressTrack.total,
        bytesPerSecond: progressTrack.bytesPerSecond,
      });
    }
  } catch (error) {
    // Log any errors that occur
    log.error('Error in download-progress handler:', error);
  }
});


autoUpdater.on('update-downloaded', () => {
  log.info('Update downloaded.');
  if (mainWindow) mainWindow.webContents.send('update-downloaded');
});

autoUpdater.on('error', (error) => {
  log.error('Update error: ', error);
  if (mainWindow) mainWindow.webContents.send('update-error', error.message);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
