# NSP 系统

> NSP 是一个模块化拆分的系统，系统内部根据不同的业务分离成了不同的项目。通过不同的项目间的合作完成一个完整的项目。

## 项目结构

1. 项目由 typescript 开发完成。
2. 项目需要出具当前项目支持的接口文档。
3. 项目需要支持不同的环境切换。
4. 项目接口统一使用`/api_***`开头。
5. 安装脚本`install.ts`初始化数据库等。

## 当前项目说明

1. 当前是商品模块，主要负责提供商品管理，分类管理
2. 商品模块目前只提供数据库搜索
3. 商品模块计划作为一个简单版本的商品管理中心，不会涉及复杂的业务逻辑。

## TODO 项

1. 商品搜索
2. 价格变价
3. 商品信息同步
