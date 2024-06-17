import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import fs from "fs";
import {
  setupTitlebar,
  attachTitlebarToWindow,
} from "custom-electron-titlebar/main";

// setup the titlebar main process
setupTitlebar();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  attachTitlebarToWindow(mainWindow);

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  // mainWindow.setMenuBarVisibility(false);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle("testy", async (_, args) => {
  const readdirRecursiveSync = (dir) => {
    const dirs = fs.readdirSync(dir, { withFileTypes: true });
    const result = {
      name: path.basename(dir),
      children: [],
    };
    dirs.forEach((file) => {
      const filePath = path.join(dir, file.name);
      if (file.isDirectory()) {
        const subResult = readdirRecursiveSync(filePath);
        result.children.push(subResult);
      } else {
        result.children.push({
          name: file.name,
          path: filePath,
        });
      }
    });
    return result;
  };

  const dd = readdirRecursiveSync("./playzone");
  console.log("running cli", _, args);
  const result = dd;

  return result;
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
