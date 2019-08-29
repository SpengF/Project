const koa=require('koa');
const router=require('koa-router');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 

(async ()=>{
    // let db=require('./mySQL/mysql')
    // let creepSql=require('./mySQL/creepSql')
    let creepSql=require('./creepSql')
      let str=''
      let a=''
    //   for(let i=1;i<106;i++){
        // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=12&course=${i}`)
        a = await creepSql.fn(`http://word.iciba.com/?action=words&class=12&course=1`)
        // str+=a
    //   }
      console.log(a)
    //   str=str.replace(/\)\(/g,'),(')
    //   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("English");
    //     var myobj = str;
    //     dbo.collection("site").insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("文档插入成功");
    //         db.close();
    //     });
    // });
    //   let sql=`INSERT INTO level_6 VALUES ${str}`
    //   db.startTransaction()
    //   db.executeTransaction(sql)
    //   db.stopTransaction()
    })()