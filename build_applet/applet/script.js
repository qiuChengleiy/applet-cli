/**
 * @description wx页面创建
 * @param { String } path 创建的位置
 */
class CreateWxPages {
    constructor(path,option = '/pages') {
        this.path = __dirname.match(/.*\/v2/)[0] + path
        this.pathname = [
            `${this.path}/index.wxml`,
            `${this.path}/index.js`,
            `${this.path}/index.wxss`, 
            `${this.path}/index.json`,
        ]
        this.tempPath = {
            'wxml': __dirname + `${option}/index.temp.wxml`,
            'wxss': __dirname + `${option}/index.temp.wxss`,
            'js': __dirname + `${option}/index.temp.js`,
            'json': __dirname + `${option}/index.temp.json`,
        }
        this.fs = require('../utils/').fs
    }

    async init() {
        await this.fs.mkdirs(this.path,() => 
            this.log(`${this.path} 目录创建完成 准备读取模板信息 ...`
        ))
    }

    async createWxml(status = 0) {
        await this.create(status,{
            temp: this.tempPath.wxml, 
            filename: this.pathname[0],
        })
    }

    async createWxss(status = 0) {
        await this.create(status,{
            temp: this.tempPath.wxss, 
            filename: this.pathname[2],
        })
    }

    async createWxjs(status = 0) {
        await this.create(status,{
            temp: this.tempPath.js, 
            filename: this.pathname[1],
        })
    }

    async createWxjson(status = 0) {
        await this.create(status,{
            temp: this.tempPath.json, 
            filename: this.pathname[3],
        })
    }

    async create(status = 0,mode) {
        const { temp, filename } = mode
        const data = await this.fs.readFile({name: temp})
        if(data && data !== 'undefined') {
            await this.fs.writeFile({name: filename, data,})
            this.log(`${filename} 写入成功 ^_^ }`)
        }else {
            this.log('ERROR ---- 该文件不存在或为空 ~~ ')
        }

        !status ? await process.send('create ok') : ''
    }

    async createPage() {
       await this.createWxml()
       await this.createWxss()
       await this.createWxjs()
       await this.createWxjson()
       await process.send('create ok')
    }

    log(info) {
        console.log(`INFO ------> ${info}`)
    }
}

/**
 * @description wx组件创建
 * @param {Array} args  传递给父组件的参数并继承父组件的属性
 */
class CreateWxComponent extends CreateWxPages {
    constructor(...args) {
        super(args[0],'/components')
    }
}

/**
 * @description wx模板创建
 * @param {Array} args  传递给父组件的参数并继承父组件的属性
 */
class CreateWxTemplate extends CreateWxPages {
    constructor(...args) {
        super(args[0],'/template')
    }
}

module.exports = {
    CreateWxPages,
    CreateWxComponent,
    CreateWxTemplate,
}