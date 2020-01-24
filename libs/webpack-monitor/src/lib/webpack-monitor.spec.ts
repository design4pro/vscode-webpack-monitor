import { webpackMonitor } from './webpack-monitor';

describe('webpackMonitor', () => {
  it('should work', () => {
    expect(webpackMonitor()).toEqual('webpack-monitor');
  });
});
