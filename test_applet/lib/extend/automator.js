/**
 * author: qiuchenglei
 * time: 2019.08.28
 * desc: 自动化脚本封装
*/


class appletAutomator {
	// 初始化类属性
	constructor(...args) {
		const { projectPath, startPage } = requrie('../config')
		const { device } = args
		this.aotomator = require('miniprogram-automator')
		this.device = device
		this.config = { projectPath, startPage }
		this.miniProgram = await automator.launch({
			projectPath,
	    })
	}

	// 执行入口
	async run() {
		if(this.device) await miniProgram.remote()
		await this.init()
		await this.on()
	}

	// 初始化脚本
	async init() {
		const _ = this
		const systemInfo = await _.miniProgram.systemInfo()
		_.page = await _.miniProgram.reLaunch(_.config.startPage)
		_.log(systemInfo)
	}

	async stop(type) {
		if(type === 'close') {
			await this.miniProgram.close()
		}else {
			await this.miniProgram.disconnect()
		}
	}

	// 监听事件
	async on() {
		const miniProgram = this.miniProgram

		miniProgram.on('console', msg => {
			console.log(`程序正常输出，稳住  -----> INFO ----- > TYPE: ${msg.type}   ARGS: ${msg.args}`)
		})

		miniProgram.on('exception', err => {
		    console.log(`JS报错啦，~(>_<)~  -----> ERROR ----- > MESSAGE: ${err.message}   STACK: ${err.stack}`)
		 })
	}

	// 调用wx对象上的方法
	async wxCallee({ method, args }) {
		await this.miniProgram.callWxMethod(method, args)
	}

	// 暴露appservice 注入执行的代码
	async appServiceEvaluate(fn) {
		const res = await this.miniProgram.evaluate(() => {
		    return new Promise(resolve => {
		      fn(resolve)
		  })
		})
		return res
	}

	// 获取当前页
	async getCurrentPage() {
		const currentPage = this.miniProgram.currentPage()
		return currentPage
	}

	// 获取页面栈
	async getPageStack() {
		const pages = await this.miniProgram.pageStack()
		this.log(pages.length)
	}

	// 录音转发
	async router({ url, type }) { 
		const miniProgram = this.miniProgram
		const routers = new Map()

		routers.set('navigateTo', async () => await miniProgram.navigateTo(url))
		routers.set('redirectTo', async () => await miniProgram.redirectTo(url))
		routers.set('navigateBack', async () => await miniProgram.navigateBack(url))
		routers.set('reLaunch', async () => await miniProgram.reLaunch(url))
		routers.set('switchTab', async () => await miniProgram.switchTab(url))
		await routers.get(type)()

		return 
	}

	// 滚地页面
	async pageScrollTo(px) {
		await this.miniProgram.pageScrollTo(px)
	}

	// 页面操作 --- 模拟用户状态 
	async todo(event) {
		// ... 关联脚本即可
	}



	// 日志打印
	log(info) {
		console.log(`INFO ---- ${info}`)
	}
}


module.exports = appletAutomator


