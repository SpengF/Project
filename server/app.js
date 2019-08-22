const koa=require('koa');
const Router=require('koa-router');
const app=new koa();
const router=new Router()
//设置跨域，一定药在路由之前设置
app.use(async (ctx,next)=>{
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
})
app.use(router.routes())

router.post('/index',async ctx=>{
  ctx.body={msg:'我是首页'}
})

const user=require('./routers/api/user')
router.use('/api',user)

const port=process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`服务已经开启，端口号为${port}`)
})