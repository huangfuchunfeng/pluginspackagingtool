# 插件打包工具

ES Module 代码 打包生成 umd 代码 工具

步骤：

- `npm i` 安装所需包
- `npm run build` 打包代码

## 目录

- src —— 源代码目录
- dist —— 打包生成目录
- build —— 配置文件

## 说明

- 目录 `src` 下面每个子目录为一个单元（一个插件/一个 js 库）  
  此目录下的文件为 `ES Module` 格式
- 目录 `build` 下 `config.js`为配置文件，配置需要打包的代码  
  入口和出口以及打包格式等其他 `rollup`配置信息
- 此打包工具使用`gulp` 和 `rollup`
