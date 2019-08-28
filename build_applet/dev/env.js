const { onReady } = require('./index')
const path = require('path')
let argv

/**
 * @description 进程监听
 */
process.on('message', msg => {
     argv = Object.prototype.toString.call(msg) == '[object Array]' ? msg : argv

    if(msg && msg !== null) {
        if(msg == 'exec') {
            sign.call(null,argv) && callback('run',msg)
            return
        }else if(msg == 'exit') {
            process.exit(0)
            return
        }
        
        callback.call(null,'ok',msg)
    }else {
        callback.call(null,'err','do not receive any instructions ~(>_<)~')
    }
})


/**
 * @description 行为约定 --create | .wxml .wxss .js .json  -all
 * @param {Array} argv 命令行参数
 * @tip 执行失败或者成功都退出当前进程
 */
const sign = async (argv) => {
    try {
        console.log(`当前指令 ---> ${argv}  😊`)
        if(!argv[2]) {
            callback.call(null,'err','请输入文件路径 ~(>_<)~')
            return
        }
    
        const extname_ = await path.extname(argv[2])
        const arg = await [argv[2].replace(extname_,''),argv[0],argv[1]]
        const filename_ = await arg
        const wx = await onReady(filename_)[arg[1]]

        await  wx.init()
        await sleep(80) 

        switch(extname_) {
            case '.wxml':
                await wx.createWxml()
                break
            case '.js':
                await wx.createWxjs()
                break
            case '.wxss':
                await wx.createWxss()
                break
            case '.json':
                await wx.createWxjson()
                break
            default:
                await wx.createPage()
                break
        }
    } catch (err) {
        await console.log(err)
        if (err) process.exit(0) 
    } finally{
        await console.log(`\n PID --- ${process.pid} has exit ...`)
    }
}

/**
 * @description 运行时的回调
 * @param {String} dirct 指令
 * @param {String} msg  msg监听
 */
const callback = (dirct,msg) => {
        process.send(dirct)  && console.log(`child_process ${process.pid} has geted !  😂   receive msg ---> ${msg.toString()}`)
}

/**
 * @description  线程延迟
 * @param {number} time 延迟时间 ms
 */
const sleep = (time = 0) => (
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(), time)
    }
))
