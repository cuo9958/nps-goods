/**
 * 安装脚本
 */
import GoodsModel from "./model/goods";
import GoodsInfoModel from "./model/goods_info";
import GoodsAttrModel from "./model/goods_attr";
import GoodsImgsModel from "./model/goods_imgs";
import ClassiModel from "./model/classi";

//强制初始化mysql数据库
GoodsModel.sync(true);
GoodsInfoModel.sync(true);
GoodsAttrModel.sync(true);
GoodsImgsModel.sync(true);
ClassiModel.sync(true);
