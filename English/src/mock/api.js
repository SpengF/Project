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
      return Mock.mock({
              'data|100': [{
                  'id|+1': 1,
                  'word':'@name',
                  'soundMark':'@name',
                  'content':'@cparagraph(2)'
              }]
            })
    }
  },
  inputSearch:function(e){
    return Mock.mock({
      'arr|1-5': ['旨在帮助前端攻城师独','接受数组时出错的问','如何模拟任意的数组',e.body.replace(/\"/g,'')]
    })
  },
  wordDetails:function(e){
    return Mock.mock({
      'wordDetail': {
          'word': e.body.replace(/\"/g,''),
          'pronunciation': 'https://dictionary.blob.core.chinacloudapi.cn/media/audio/tom/58/1a/581A5AD5D596295155D08C8E49A2A19D.mp3', //url: http://www.baidu.com
          'wordIdea|1-3':  [{
            'nature|1': ['n','v','obj','int'],
            'mean': '@ctitle', //中文,
          }], 
          'sentence|2-5': [{
            'englishSentence': '@paragraph(1)',
            'chineseSentence': '@cparagraph(1)', //中文,
          }]
      }
  })
  }
}
export default allApi;