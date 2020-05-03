const requireLang = require.context('@/lang', true, /\.json$/)

const messages = {}

for (const file of requireLang.keys()) {
  if (file === './index.js') continue
  const paths = file.replace(/(\.\/|\.json$)/g, '').split('/')
  paths.reduce((o, s, i) => {
    if (o[s]) return o[s]
    if (i + 1 === paths.length) {
      if (paths[i] === 'index') {
        const indexContent = requireLang(file)
        Object.keys(indexContent).forEach(key => {
          o[key] = indexContent[key]
        })
        return o
      }
      o[s] = requireLang(file)
      return o[s]
    }
    o[s] = {}
    return o[s]
  }, messages)
}

export default messages
