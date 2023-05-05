import path from "path"

const { Menu, Tray } = require('electron')

const createTray = (): void => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([{ label: '退出', role: 'quit' }])
  tray.setToolTip('张云志的摄像头')
  tray.setContextMenu(contextMenu)
}
export default createTray
