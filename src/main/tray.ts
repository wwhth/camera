/*
 * @Author: wwhth zhangyunzhi@vrvmail.com.cn
 * @Date: 2024-08-21 10:15:46
 * @LastEditors: wwhth zhangyunzhi@vrvmail.com.cn
 * @LastEditTime: 2024-08-21 14:14:39
 * @FilePath: /camera/src/main/tray.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { myWin } from '.'
import { app } from 'electron'

const { Menu, Tray } = require('electron')
let tray
const createTray = (): void => {
  tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '退出',
      click: (): void => {
        console.log('退出')
        myWin?.destroy()
        app.quit()
      }
    },
    {
      label: '打开',
      click: (): void => {
        myWin?.show()
      }
    }
  ])
  tray.setToolTip('张云志的摄像头')
  // tray.setContextMenu(contextMenu)
  tray.on('right-click', () => {
    console.log('right-click')
    tray.popUpContextMenu(contextMenu)
  })
  // tray.on('left-click', () => {
  //   console.log('left-click')
  //   if (!myWin?.isVisible()) {
  //     myWin?.show()
  //   }
  // })
  tray.on('click', () => {
    console.log('click')
    if (!myWin?.isVisible()) {
      myWin?.show()
    }
  })
}
export default createTray
