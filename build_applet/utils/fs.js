const fs = require("fs")
const path = require("path")
  
/**
 * @description 创建文件夹目录
 * @param { String } dirname 文件路径
 * @param { func } callback  回调
 */
 function mkdirs(dirname, callback) {  
    fs.exists(dirname, function (exists) {  
        if (exists) {  
            callback();  
        } else {  
            mkdirs(path.dirname(dirname), function () {  
                fs.mkdir(dirname, callback);  
            })
        }  
    })
}

/**
 * @description  文件写入封装
 * @param {Object} param 
 */
async function writeFile(param) {
    const data = param.data
    await fs.writeFileSync(param.name, data,{encoding: 'utf-8'})
}

/**
 * @description 文件读取封装
 * @param { Object } param 
 */
async function readFile(param) {
    const read_ = await fs.readFileSync(param.name, {encoding: 'utf-8'})
    return read_
}

module.exports = { 
    mkdirs, 
    readFile,
    writeFile,
}