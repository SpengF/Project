const koa=require('koa');
const router=require('koa-router');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
(async ()=>{
    let creepSql=require('./creepSql')
    let str=[]
    let a=[]
    for(let i=1;i<106;i++){
      a = await creepSql.fn(`http://word.iciba.com/?action=words&class=11&course=${i}`) //CET4
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=12&course=${i}`) //CET6
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=15&course=${i}`) //IELTS
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=14&course=${i}`) //TOEFL
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=140&course=${i}`) //高考大纲 CEE College entrance examination
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=141&course=${i}`) //高考短语 CEElittle
      // a = await creepSql.fn(`http://word.iciba.com/?action=words&class=141&course=1`) //高考短语 CEElittle

      Array.prototype.push.apply(str,a)
      // Array.prototype.push.call(str,...a)
    }
    // console.log(a)
    // console.log(str);
    // console.log(transform(str))

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("English");
      var myobjList = str;
      dbo.collection("CET4").insertMany(myobjList, function(err, res) {
          if (err) throw err;
          console.log("插入的文档数量为: " + res.insertedCount);
          db.close();
      });
    });
})()