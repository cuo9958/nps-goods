import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

export interface iClassi {
    id: number;
    name: string;
    image: string;
    pid: number;
    status: number;
}
/**
 * 分类表
 */
class Classi extends Model<iClassi> implements iClassi {
    public id: number;
    public name: string;
    public image: string;
    public pid: number;
    public status: number;
}
Classi.init(
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
        pid: {
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
    sync: (force = true) => Classi.sync({ force }),
    insert: function (model: any) {
        return Classi.create(model);
    },
    get: function (id: string) {
        return Classi.findOne({
            where: {
                id,
            },
        });
    },
    update(model, id) {
        return Classi.update(model, {
            where: { id },
        });
    },
    search(pageIndex = 0, pid, limit = 20) {
        let opts: any = {};
        if (pid !== undefined) {
            opts.cid = pid;
        }
        return Classi.findAndCountAll({
            where: opts,
            offset: pageIndex * limit,
            limit,
        });
    },
};
