import { ExtensionContext, window } from 'vscode';
import { getOutputChannel } from './app/output-channel';
import {
  getTelemetry,
  initTelemetry,
  teardownTelemetry
} from './app/telemetry';
import { VSCodeStorage } from './app/vscode-storage';

let context: ExtensionContext;

export function activate(c: ExtensionContext) {
  try {
    const startTime = Date.now();
    context = c;
    const store = VSCodeStorage.fromContext(context);
    initTelemetry(store);

    getTelemetry().extensionActivated((Date.now() - startTime) / 1000);
  } catch (e) {
    window.showErrorMessage(
      'Webpack Monitor encountered an error when activating (see output panel)'
    );
    getOutputChannel().appendLine(
      'Webpack Monitor encountered an error when activating'
    );
    getOutputChannel().appendLine(JSON.stringify(e));
    getTelemetry().exception(e.message);
  }
}

export async function deactivate() {
  getTelemetry().extensionDeactivated();
  teardownTelemetry();
}
