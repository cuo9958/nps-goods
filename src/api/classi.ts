import Router from "koa-router";
import { ErrorData, SuccessData } from "../service/utils";
import ClassiModel from "../model/classi";

const router = new Router();

//分类列表
router.get("/", async function (ctx) {
    const { pid, pageIndex } = ctx.query;
    try {
        const data = await ClassiModel.search(pageIndex, pid);
        ctx.body = SuccessData(data);
    } catch (error) {
        console.log(error);
        ctx.body = ErrorData(error.message);
    }
});

export default router.routes();
