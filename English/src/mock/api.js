const Mock=require('mockjs')
const allApi={
  userInfo:function(){
    return [{level:'四级',to:'/level/level4'},{level:'六级',to:'/level/level6'}]
  },
  level:function(e){
    let url=e.url.split('/')
    let toUrl=url[url.length-1]
    if(toUrl==='level4'){
      return Mock.mock({
          'data|100': [{
              'id|+1': 1,
              'word':'@name',
              'soundMark':'@name',
              'content':'@cparagraph(2)'
          }]
      })
    }else if(toUrl==='level6'){
      return ['a','b','c']
    }
  },
}
export default allApi;