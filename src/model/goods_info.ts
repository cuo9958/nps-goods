import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";
import { iGoods } from "./goods";

interface GoodsInfoAttr extends iGoods {
    content: string;
}
/**
 * 商品信息表,附加规格表，头图表
 */
class GoodsInfo extends Model<GoodsInfoAttr> implements GoodsInfoAttr {
    public id: number;
    public spu: string;
    public title: string;
    public sort_title: string;
    public image: string;
    public content: string;
    public cid: number;
    public status: number;
    public brand_id: number;
}
GoodsInfo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        spu: {
            type: DataTypes.STRING(10),
            defaultValue: "",
            comment: "商品的sku",
        },
        title: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            comment: "标题",
        },
        sort_title: {
            type: DataTypes.STRING(20),
            defaultValue: "",
            comment: "短标题",
        },
        image: {
            type: DataTypes.STRING(20),
            defaultValue: "",
            comment: "主图",
        },
        content: {
            type: DataTypes.TEXT,
            defaultValue: "",
            comment: "详情",
        },
        cid: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "分类id",
        },
        brand_id: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "品牌id",
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
            comment: "状态:0/1/99,待上架、上架、删除",
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "t_goods",
        indexes: [
            {
                unique: true,
                fields: ["spu"],
            },
        ],
    }
);

export default {
    sync: (force = true) => GoodsInfo.sync({ force }),
    insert: function (model: any) {
        return GoodsInfo.create(model);
    },
    get: function (spu: string) {
        return GoodsInfo.findOne({
            where: {
                spu,
            },
        });
    },
    update(model, spu) {
        return GoodsInfo.update(model, {
            where: { spu },
        });
    },
};
