import { BrowserWindow, ipcMain } from "electron";

export default (win: BrowserWindow): void => {
  ipcMain.handle('drag', (_event, opt: { x: number; y: number }) => {
    console.log(opt, 'drag')
    const [x, y] = win.getPosition()
    win.setPosition(x + opt.x, y + opt.y)
    console.log(x, y)
  })
}
