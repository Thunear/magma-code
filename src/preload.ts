import { Titlebar, TitlebarColor } from "custom-electron-titlebar";
import { contextBridge, ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  // Title bar implementation
  new Titlebar({
    backgroundColor: TitlebarColor.fromHex("#0E161D"),
    menuTransparency: 50,
    icon: "./assets/img/icon.png",
  });
});

contextBridge.exposeInMainWorld("electron", {
  blenderVersion: async (blenderPath: string) =>
    ipcRenderer.invoke("testy", blenderPath),
});
