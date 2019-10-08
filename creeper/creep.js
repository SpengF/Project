const koa=require('koa');
const router=require('koa-router');

// const server=new koa();
// server.lissten(9999);
// let r1=router();
// server.use(r1.routes());
  (async ()=>{
    let db=require('./mySQL/mysql')
    let creepSql=require('./mySQL/creepSql')
      let str=''
      let a=''
      for(let i=1;i<106;i++){
        a = await creepSql.fn(`http://word.iciba.com/?action=words&class=12&course=${i}`)
        str+=a
      }
      str=str.replace(/\)\(/g,'),(')
      let sql=`INSERT INTO level_6 VALUES ${str}`
      db.startTransaction()
      db.executeTransaction(sql)
      db.stopTransaction()
    })()