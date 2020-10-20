/**
 * 安装脚本
 */
import GoodsModel from "./model/goods";
import GoodsInfoModel from "./model/goods_info";

//强制初始化mysql数据库
GoodsModel.sync(true);
GoodsInfoModel.sync(true);
