const path=require('path')
const Mysql=require('mysql-pro')
const base=require('../config')
const db=new Mysql({
  mysql:{
    host:         base.db_host,
    port:         base.db_port,
    database:     base.db_name,
    user:         base.db_user,
    password:     base.db_pass
  }
})
module.exports=db;