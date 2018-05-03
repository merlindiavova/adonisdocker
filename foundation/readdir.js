var fs = require('fs')
var path = require('path')

module.exports = (root, files, prefix) => {
  prefix = prefix || ''
  files = files || []

  var dir = path.join(root, prefix)
  if (!fs.existsSync(dir)) return files
  if (fs.statSync(dir).isDirectory())
    fs.readdirSync(dir)
    .forEach(function (name) {
      module.exports(root, files, path.join(prefix, name))
    })
  else
    files.push(prefix)

  return files
}
