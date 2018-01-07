const {app, BrowserWindow} = require('electron');

let mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
  
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  
    mainWindow.openDevTools();
  
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
});
