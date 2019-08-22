const Router=require('koa-router')
const router=new Router();
router.get('/user/login',async ctx=>{
  ctx.body={msg:'我是login'}
})
module.exports=router.routes()