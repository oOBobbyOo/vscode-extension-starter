import { defineExtension, useCommand } from 'reactive-vscode'
import { window } from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  useCommand('vscode-extension-starter.helloWorld', () => {
    window.showInformationMessage('Hello World')
  })
})

export { activate, deactivate }
