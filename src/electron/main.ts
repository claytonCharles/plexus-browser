import { app, BrowserWindow } from "electron";

type app = string;

app.on("ready", () => {
  const mainWindow = new BrowserWindow();

  mainWindow.loadFile(app.getAppPath() + "/dist/renderer/index.html");
});
