// 40. Write a Program that create an copy of an array without mutating the original
var arr6 = [1,2,3,4,5];
// var copy = [...arr6];
// console.log(copy)

var copy=[];
console.log(copy)  // before
// using for each
arr6.forEach(function(value){
    copy.push(value)
})

console.log(copy)  // after