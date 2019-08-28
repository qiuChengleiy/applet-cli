const app = {}
const child_process = require('child_process')
const argv = process.argv.slice(2)
const path = require('path')

/**
 * @description 进程管理
 * @param { path } exc 可执行文件 
 */
const processManager = (exc = './dev/env.js') => {
    const fork = child_process.fork
    const child = fork(exc)

    child.on('message', msg => {
        if(msg == 'ok') {
            callback.call(null,child,'exec','successfully send instructions  😊  ~ start running . waiting ...')
        }else if(msg == 'run'){
            console.log('child process is running .... ^_^')
        }else if(msg == 'err' || msg == 'create ok'){
            callback.call(null,child,'exit')
        }
    })

    child.send(argv)
} 

/**
 * @description 运行时的回调
 * @param { process } p_  子进程
 * @param { String } dirct 指令
 * @param { String } msg  msg监听
 */
const callback = (p_,dirct,msg) => {
    if(dirct == 'exit') {
        process.exit(0) && console.log('please retry  ~(>_<)~')
        return
    }
    p_.send(dirct) && console.log(msg,process.pid)
}

app.start = processManager
app.start()







