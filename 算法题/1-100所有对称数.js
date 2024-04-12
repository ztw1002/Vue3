function getNum (start, end) {
  var arr = [];
    for(var i = start; i < end; i++) {
      if (i.toString() === i.toString().split('').reverse().join('') && i.toString().length > 1) {
      arr.push(i);
      }
    }
    return arr;
}
console.log(getNum(1,10000));