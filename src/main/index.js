'use strict'

import { app, BrowserWindow, Tray, Menu } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let canQuit = false
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  app.isLogined = false
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    width: 1000,
    show: false,
    useContentSize: true,
    autoHideMenuBar: true,
    icon: 'build/icons/icon.png'
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('close', e => {
    if (!canQuit) {
      e.preventDefault()

      mainWindow.hide()
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  let loginWindow = new BrowserWindow({
    height: 450,
    width: 380,
    minimizable: false,
    maximizable: false,
    hasShadow: true,
    parent: mainWindow,
    useContentSize: true,
    autoHideMenuBar: true,
    icon: 'build/icons/icon.png'
  })

  loginWindow.loadURL(winURL)

  loginWindow.on('closed', e => {
    if (app.isLogined) {
      mainWindow.show()

      createTray()
    } else {
      mainWindow.close()
    }

    loginWindow = null
  })
}

function createTray () {
  mainWindow.Tray = new Tray('build/icons/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Quit',
      click: e => {
        canQuit = true
        mainWindow.close()
      }
    }
  ])
  mainWindow.Tray.setToolTip('这是我的应用程序.')
  mainWindow.Tray.setContextMenu(contextMenu)
  mainWindow.Tray.on('click', e => {
    if (mainWindow.isVisible()) {
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
