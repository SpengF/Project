const Router=require('koa-router')
const router=new Router();
/**
 * @router 所有用户信息
 * @desc /api/user/login
 * @access 公开
 */
router.get('/user/login',async ctx=>{
  ctx.body={msg:'我是login'}
})
module.exports=router.routes()