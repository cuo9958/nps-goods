import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export interface iGoods {
    id: number;
    spu: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 短标题
     */
    sort_title: string;
    /**
     * 首图
     */
    image: string;
    cid: number;
    status: number;
    /**
     * 品牌id
     */
    brand_id: number;
}
/**
 * 商品简略信息表
 */
class Goods extends Model<iGoods> implements iGoods {
    public id: number;
    public spu: string;
    public title: string;
    public sort_title: string;
    public image: string;
    public cid: number;
    public status: number;
    public brand_id: number;
}
Goods.init(
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
    sync: (force = true) => Goods.sync({ force }),
    insert: function (model: any) {
        return Goods.create(model);
    },
    get: function (spu: string) {
        return Goods.findOne({
            where: {
                spu,
            },
        });
    },
    update(model, spu) {
        return Goods.update(model, {
            where: { spu },
        });
    },
};
