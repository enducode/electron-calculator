const {app, BrowserWindow} = require('electron');
let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 200, height: 300, show: false, resizable:false, frame: false});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
  
    //mainWindow.openDevTools({mode: 'detach'});
    mainWindow.on('ready-to-show', function() {
        mainWindow.show();
    });
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
