module.exports =  function transform(str) {
    const arr = str.match(/'[^]+?'/g);
    // console.log(arr)
    if (!arr) return [];
    const jsonArr = [];
    const keys = ['id', 'word', 'pronunciation', 'chinese'];
    let i, len;
    arr.forEach((item, index) => {
      i = index % 4;
      len = jsonArr.length;
      if (i === 0) {
        jsonArr.push({
          id: `${len + 1}`,
        })
      } else {
        jsonArr[len - 1][keys[i]] = item.slice(1, item.length - 1);
      }
    });
    return jsonArr;
  }