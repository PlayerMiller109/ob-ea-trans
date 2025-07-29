module.exports = {
  github: {
    release: true,
    releaseName: "${version}",
    releaseNotes: 'echo "\n"',
    assets: [
      'main.js',
      'manifest.json',
      'styles.css',
      'obsidian-excalidraw-plugin.zip',
    ],
    proxy: process.env.HTTPS_PROXY,
  },
  npm: {
    publish: false,
  },
};