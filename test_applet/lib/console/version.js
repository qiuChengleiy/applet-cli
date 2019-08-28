module.exports = (argv) => {
	const { version, log } = require('../config')
	if(argv[0] === '-v' || argv[0] === '--version') {
		console.log(`version:${version} ${log}`)
		return
	}
}


