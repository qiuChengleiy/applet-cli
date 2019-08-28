const automator = require('miniprogram-automator')

const miniProgram = automator.launch({
  projectPath: '/Users/qiuchenglei/业务/CRM小程序/v2/crm_applet', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/pages/index/index')
  await page.waitFor(500)
  const element = await page.$('.add-btn')
  console.log(await element.attribute('bindtap'))
  await element.tap()

  // await miniProgram.close()
})