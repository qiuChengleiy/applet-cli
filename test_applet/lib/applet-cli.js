#!/usr/bin/env node

const { version } = require('./console')

module.exports = {
	run: (argv) => {
	 	version.call(null,argv) // -v , --version
	}
}