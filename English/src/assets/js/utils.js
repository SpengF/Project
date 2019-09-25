function debounceInput(method,delay) {
  var timer=null;
  return function () {
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
          method.apply(context);
      },delay);
  }
}
function clearSearchHistoryList(ctx){
  ctx.$store.commit('inputSelect',[])
}
export {debounceInput,clearSearchHistoryList}