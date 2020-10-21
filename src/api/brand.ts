import Router from "koa-router";
import { ErrorData, SuccessData } from "../service/utils";
import BrandModel from "../model/brand";

const router = new Router();

//品牌列表
router.get("/", async function (ctx) {
    const { cid, pageIndex } = ctx.query;
    try {
        const data = await BrandModel.search(pageIndex, cid);
        ctx.body = SuccessData(data);
    } catch (error) {
        console.log(error);
        ctx.body = ErrorData(error.message);
    }
});

export default router.routes();
