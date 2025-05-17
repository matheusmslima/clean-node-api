module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '6.0.5',
      arch: 'arm64',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  }
}
