import Router from "koa-router";

import test from "./api";

const router = new Router();

router.use("/api_goods/test", test);

//公共接口

//内部接口

export default router;
