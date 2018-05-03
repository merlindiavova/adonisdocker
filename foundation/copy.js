const fs =  require('fs')
const path = require('path')

module.exports = (source, destination) => {
    var results = [];
    var list = fs.readdirSync(source);
	var src, dst;
    list.forEach(function(file) {
        src = source + '/' + file;
		dst = destination + '/' + file;
        var stat = fs.statSync(src);
        if (stat && stat.isDirectory()) {
			try {
				fs.mkdirSync(dst);
			} catch(e) {
				console.log('directory already exists: ' + dst);
			}
			results = results.concat(module.exports(src, dst));
		} else {
			try {
				fs.writeFileSync(dst, fs.readFileSync(src));
			} catch(e) {
				console.log('could\'t copy file: ' + dst);
			}
			results.push(src);
		}
    });
    return results;
}