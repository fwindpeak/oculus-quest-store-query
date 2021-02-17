# Oculus Quest Store 信息查询

使用github action 定时获取 Oculus Quest 商店的打折信息，并推送到gitee pages页面，生成静态页面。

可以访问这个地址查看：[https://fwindpeak.gitee.io/oculus-quest-store-list/#/](https://fwindpeak.gitee.io/oculus-quest-store-list/#/)


## 说明

- 使用github action，访问oculus quest store页面接口，下载全部游戏信息保存成json
- 使用vue+vant ui做一个单页应用，访问这个json
- 使用[这个action](https://github.com/yanglbme/gitee-pages-action)同步仓库文件到gitee，并刷新pages


## TODO

- [x] 分类改为 Tab
- [x] 动态汇率
- [x] 返回顶部按钮
- [ ] 空白提示
- [ ] 做成小程序

## 脚本说明

### `all-in-one.py`

oculus quest 商店的所有操作整合到一个脚本

### `get-store-json.py`

获取商店全部游戏的信息，保存成 json 文件

### `read-store-info.py`

读取 json 文件，打印打折的游戏信息

### `download-cover.py`

下载游戏的横屏封面保存到 cover 目录

## 备注

- 保存的 json 文件删除了一些不需要的信息，以减少体积
- 保存的 json 使用了格式化换行，方便查看 git 记录
- 因为gitee检测到异地登录需要验证，可以绑定gitee的微信公众号，避免验证
