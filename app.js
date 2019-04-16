const Koa =require('koa');
const json =require('koa-json');
const KoaRouter =require('koa-router');
const render =require('koa-ejs')
const path =require('path');

const router =new KoaRouter();
const app =new Koa();


app.use(json());

// router.get('/test',ctx=>(ctx.body ="hello router"))
// 配置路由
app.use(router.routes()).use(router.allowedMethods());
// 配置模板引擎
render(app,{
    root:path.join(__dirname,'views'),
    layout:'layout',
    viewExt:'html',
    cache:false,
    debug:false
});

// 路由跳转
router.get('/', async ctx=>{
    await ctx.render('index',{
        title:'things i love,app.js'
    });
})
// app.use(async ctx =>(ctx.body ={msg:"hello koa!i am nodemon"}))

app.listen(3000,()=>console.log("server port 3000"));