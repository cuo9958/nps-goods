import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

interface GoodsAttr {
    id: number;
    spu: string;
    sku: string;
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
}
/**
 * 商品简略信息表
 */
class Goods extends Model implements GoodsAttr {
    public id: number;
    public spu: string;
    public sku: string;
    public title: string;
    public sort_title: string;
    public image: string;
    public cid: number;
    public status: number;
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
            comment: "商品的spu",
        },
        sku: {
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
                fields: ["sku"],
            },
        ],
    }
);

export default {
    sync: (force = true) => Goods.sync({ force }),
    insert: function (model: any) {
        return Goods.create(model);
    },
    get: function (uuid: string) {
        return Goods.findOne({
            where: {
                uuid,
            },
        });
    },
    update(model, uuid) {
        return Goods.update(model, {
            where: { uuid },
        });
    },
};
