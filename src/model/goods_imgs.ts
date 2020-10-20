import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export interface iGoodsImgs {
    id: number;
    spu: string;
    /**
     * 标题
     */
    title: string;
    src: string;
    status: number;
}
/**
 * 商品简略信息表
 */
class GoodsImgs extends Model<iGoodsImgs> implements iGoodsImgs {
    public id: number;
    public spu: string;
    public title: string;
    public src: string;
    public status: number;
}
GoodsImgs.init(
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
        src: {
            type: DataTypes.STRING(200),
            defaultValue: "",
            comment: "短标题",
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
            comment: "状态:0/1,生效、失效",
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
    sync: (force = true) => GoodsImgs.sync({ force }),
    insert: function (model: any) {
        return GoodsImgs.create(model);
    },
    get: function (spu: string) {
        return GoodsImgs.findOne({
            where: {
                spu,
            },
        });
    },
    update(model, spu) {
        return GoodsImgs.update(model, {
            where: { spu },
        });
    },
};
