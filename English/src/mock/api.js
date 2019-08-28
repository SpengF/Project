const Mock=require('mockjs')
const allApi={
  userInfo:function(){
    return [{level:'四级',to:'/level4'},{level:'六级',to:'/level6'}]
  }
}
export default allApi;