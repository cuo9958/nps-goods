import Router from "koa-router";

const router = new Router();

//商品列表
router.get("/list", function (ctx, next) {
    ctx.body = "测试接口";
});

//商品详情
router.get("/info/:sku", function (ctx, next) {
    ctx.body = "测试接口";
});

export default router.routes();
