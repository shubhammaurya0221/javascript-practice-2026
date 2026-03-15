// 28. Use a for loop to reverse an array [1,2,3,4]
var arr = [1,2,3,4];
var arrRev = [];
// console.log(arr.reverse())
for(var index = arr.length -1; index >=0 ;index--){
    // console.log(arr[index]);
    arrRev.push(arr[index])   
}
console.log(arrRev)