export const dimensions = Object.freeze({
  APP_WIDTH: 600,
  APP_HEIGHT: 400
});

export const platform = Object.freeze({
  OSX: process.platform === 'darwin',
  NIX: ['freebsd', 'linux', 'sunos'].indexOf(process.platform) !== -1,
  WIN: /^win/.test(process.platform)
});
