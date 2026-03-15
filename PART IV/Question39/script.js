// 39. Sort array [1,4,8,2,5] in asending order
var arr5 = [1,4,8,2,5]
// console.log(arr5.sort())

for(var i =0; i<arr5.length-1;i++){
    for(var j =0; j<arr5.length -1-i;j++){
        var temp = 0;
        if(arr5[i]>arr5[i+1]){
            temp = arr5[i];
            arr5[i] = arr5[i+1];
            arr5[i+1] = temp; 
        }
    }    
}
console.log(arr5)