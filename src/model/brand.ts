import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export interface iBrand {
    id: number;
    name: string;
    image: string;
    cid: number;
    status: number;
}
/**
 * 品牌表
 */
class Brand extends Model<iBrand> implements iBrand {
    public id: number;
    public name: string;
    public image: string;
    public cid: number;
    public status: number;
}
Brand.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            comment: "分类名",
        },
        image: {
            type: DataTypes.STRING(200),
            defaultValue: "",
            comment: "图片",
        },
        cid: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: "父分类id",
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
            comment: "状态:0/1",
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "t_classi",
        indexes: [],
    }
);

export default {
    sync: (force = true) => Brand.sync({ force }),
    insert: function (model: any) {
        return Brand.create(model);
    },
    get: function (id: string) {
        return Brand.findOne({
            where: {
                id,
            },
        });
    },
    update(model, id) {
        return Brand.update(model, {
            where: { id },
        });
    },
};
