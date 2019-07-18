
const charset=require('superagent-charset')
const superagent=charset(require('superagent'));
const cheerio=require('cheerio');
module.exports={
  fn:async (address)=>{
        function dataJoin(arg){
          return '('+arg.map(item=>`'${item.toString().replace(/\'/g,'')}'`).join(',')+')'  //删除数据中的',并添加
        }
        let arr=[];
        let data=await superagent.get(address).charset()
        let $=cheerio.load(data.text)
        // let count=0;                       //定义ID
        $('.word_main .word_main_list li').each((index,conment)=>{
          // count++
          let childrenArr=[];
          childrenArr.push(0);
          $('.word_main .word_main_list li').eq(index).children().each((index2,conment2)=>{
            let item=$(conment2).attr('class')
            if(item==='word_main_list_w'){
              childrenArr.push($(conment2).children('span').text().trim())
            }else if(item==='word_main_list_y'){
              childrenArr.push($(conment2).children('strong').text().trim())
            }else{
              childrenArr.push($(conment2).children('span').text().trim())
            }
          })
            arr.push(dataJoin(childrenArr))
        })
        return sql=arr.join(',')
      }
}