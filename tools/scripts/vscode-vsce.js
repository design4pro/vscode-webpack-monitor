const cp = require('child_process');
const path = require('path');
cp.execSync(
  `${path.normalize(
    '../../../node_modules/.bin/vsce'
  )} package --yarn --out webpack-manager.vsix`,
  {
    stdio: [0, 1, 2],
    cwd: path.normalize('dist/apps/vscode')
  }
);
