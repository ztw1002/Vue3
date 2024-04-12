var a = [1,2,3,4,5,6,7,8,9];
var b = [];
const n = a.length		// 记录数组初始长度
		
  for (var i = 0; i < n; i++) {
    var index = parseInt((Math.random()) * a.length)
    b.push(a.splice(index,1)[0])    
// a.splice(index,1)返回的是一个数组，数组中是被删除的那个元素，后面加 [0] 是为了取到这个数组中的元素
  }

console.log(b);