import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

interface iGoodsAttr {
    id: number;
    name: string;
    val: string;
    sku: string;
    /**
     * 价格
     */
    price: number;
    /**
     * 库存
     */
    stock: number;
    /**
     * 单位
     */
    unit: string;
    status: number;
}
/**
 * 商品规格表
 */
class GoodsAttr extends Model<iGoodsAttr> implements iGoodsAttr {
    public id: number;
    public name: string;
    public val: string;
    public sku: string;
    public price: number;
    public stock: number;
    public unit: string;
    public status: number;
}
GoodsAttr.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sku: {
            type: DataTypes.STRING(10),
            defaultValue: "",
            comment: "商品的sku",
        },
        name: {
            type: DataTypes.STRING(20),
            defaultValue: "",
            comment: "名称",
        },
        val: {
            type: DataTypes.STRING(20),
            defaultValue: "",
            comment: "规格值",
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "价格，单位分",
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "库存数量",
        },
        unit: {
            type: DataTypes.STRING(10),
            defaultValue: "",
            comment: "单位",
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
            comment: "状态:0、1，关闭、展示",
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "t_goods_attr",
        indexes: [
            {
                unique: true,
                fields: ["sku"],
            },
        ],
    }
);

export default {
    sync: (force = true) => GoodsAttr.sync({ force }),
    insert: function (model: any) {
        return GoodsAttr.create(model);
    },
    get: function (sku: string) {
        return GoodsAttr.findOne({
            where: {
                sku,
            },
        });
    },
    update(model, sku) {
        return GoodsAttr.update(model, {
            where: { sku },
        });
    },
};
