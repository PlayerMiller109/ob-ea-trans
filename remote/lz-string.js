const fs = require('fs')
const extractKeys = require('./extractKeys')
const LZString = require('lz-string')

const cnPath = 'trans-log/zh.ts'
const jsPath = 'main.js'

const folder = 'remote'
const remoteTsNames = ['en.ts']
for (const fileName of remoteTsNames) {
  const targetPath = `${folder}/${fileName}`
  extractKeys(targetPath, 'export default')
}

const cont = fs.readFileSync(cnPath, 'utf8')
const compressed = LZString.compressToBase64(cont)
let mainJs = fs.readFileSync(jsPath, 'utf8')
mainJs = mainJs.replace(
  /const PLUGIN_LANGUAGES\s*=\s*(\{.*)/,
  (m, p1)=> m.replace(p1, `{"zh-cn": "${compressed}"};`)
)
fs.writeFileSync(jsPath, mainJs)