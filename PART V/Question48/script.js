// Create a function to find a largest number from an array
function largestNum(arr){
    var largest = 0;
    for(var i= 1; i<arr.length; i++ ){
        if(arr[largest] < arr[i]){
            largest = i;
        }
    }
    return largest;
}

console.log(largestNum([1,2,3,4]))