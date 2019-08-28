# applet-cli
自己写的微信小程序命令行工具， 提高工作效率 🤔


#### build_applet 


* 系统环境: MAC OS
* 基于微信CLI工具 ：如 打开指定项目的开发者工具（cli） 、关闭指定项目的开发者工具(cli) （目前版本存在一定的bug）
* 基于nodejs的文件操作 、 进程操作, 用于构建项目
* 示例脚本是我的本地path，换成自己的即可 

```json
{
  "name": "qiuchenglei",
  "version": "1.0.0",
  "description": "applet script",
  "main": "index.js",
  "repository": "http://hjgit.shangxiaban.cn/jiangtao/crm_applet.git",
  "author": "qiuChengleiy <qcl9701s666@163.com>",
  "license": "MIT",
  "scripts": {
    "wx:open": "cd ~ && cd  /Applications/wechatwebdevtools.app/Contents/MacOS && ./cli -o /Users/qiuchenglei/业务/CRM小程序/v2/crm_applet && cd ~/业务/CRM小程序/v2/crm_applet",
    "wx:close": "cd ~ && cd /Applications/wechatwebdevtools.app/Contents/MacOS && ./cli --quit && cd ~/业务/CRM小程序/v2/crm_applet",
    "wx:open-build": "code ../build_applet",
    "wx:page-build": "cd ../build_applet && npm run wx:page",
    "wx:comp-build": "cd ../build_applet && npm run wx:comp",
    "wx:temp-build": "cd ../build_applet && npm run wx:temp"
  }
}

```


### example

* page构建 （指定路径）

```sh
npm run wx:page-build pages/index  #  (默认创建wxml wxss json js) 

npm run wx:page-build pages/index.wxml  #  创建wxml

npm run wx:page-build pages/index.wxss  #  创建wxss

npm run wx:page-build pages/index.js  #  创建js

npm run wx:page-build pages/index.json  #  创建json
```


* component构建 （指定路径）

```sh
npm run wx:page-build components/index  #  (默认创建wxml wxss json js) 

npm run wx:page-build components/index.wxml  #  创建wxml

npm run wx:page-build components/index.wxss  #  创建wxss

npm run wx:page-build components/index.js  #  创建js

npm run wx:page-build components/index.json  #  创建json
```


* template构建 （指定路径）

```sh
npm run wx:page-build template/index  #  (默认创建wxml wxss json js) 

npm run wx:page-build template/index.wxml  #  创建wxml

npm run wx:page-build template/index.wxss  #  创建wxss

npm run wx:page-build template/index.js  #  创建js

npm run wx:page-build template/index.json  #  创建json
```


#### test_applet

* 自动化测试脚本(已经关联到 bash/bin)

```shell

$applet-cli test *.js (需要参考文档编写测试脚本)

```














