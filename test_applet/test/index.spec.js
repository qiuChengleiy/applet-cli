// index.spec.js
const automator = require('miniprogram-automator');

describe('首页', () => {
	let miniProgram
    let page
    let timeBefore = 300000
    let timeAfter = 1000000
    let timeout = 100000
	　// 运行测试前调用
	　beforeAll(async () => {
		miniProgram = await automator.launch({
		      projectPath: '/Users/qiuchenglei/业务/CRM小程序/v2/crm_applet'
		   })
		page = await miniProgram.reLaunch('/pages/index/index')
		await page.waitFor(500)
	　},timeBefore);
	　// 运行测试后调用
	　afterAll(async () => {
	　     await miniProgram.close()
	　},timeAfter);
	　// 测试内容
	　it('功能模块', async (done) => {
		setTimeout(async () => {
		 	const bars = await page.$$('.bar-box');
		 	expect(await bars[bars.length-1].attribute('data-class')).toContain('功能');
		},1000)
	　},timeout)
})





