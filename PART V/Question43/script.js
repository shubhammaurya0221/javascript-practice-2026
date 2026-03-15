// 43. Write a function that accepts an array and return sun of its elements
function arraySum(array){
    var sum = 0;
    array.forEach(element => {
        sum+=element;
    });
    return sum;
}

var arr = [1,2,3,4,5]
console.log("The sum of array is",arraySum(arr))