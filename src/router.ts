import Router from "koa-router";

import test from "./api";
import brand from "./api/brand";

const router = new Router();

router.use("/api_goods/test", test);

//公共接口
router.use("/api_goods/pub/brand", brand);

//内部接口

export default router;
