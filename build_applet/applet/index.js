const config = require('../config').applet.outfile
const test = require('../config').applet.test
const { CreateWxPages, CreateWxComponent, CreateWxTemplate } = require('./script')
const path = require('path')

/**
 * @description  wx实例创建
 * @param {Array} argv  指令参数
 * @dict --test  |  product env
 * @dict default?  | development env
 * @dict --c | create component
 * @dict --t | create template
 * @dict --p ?| create pages 
 */
const _wx = (argv) => ({
    '--c': new CreateWxComponent(path.join(argv[2] == '--test' ? test : config,argv[0])),
    '--t': new CreateWxTemplate(path.join(argv[2] == '--test' ? test : config,argv[0])),
    '--p': new CreateWxPages(path.join(argv[2] == '--test' ? test : config,argv[0])),
})
    
exports._wx = _wx 