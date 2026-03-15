// Write a function that accepts a string and return its reverse
function reverseStr(str){
    var newStr = '';
    for(var i = str.length-1; i>=0; i--){
        newStr = newStr+str[i];
    }
    return newStr;
}
console.log(reverseStr("ADII"));

function reverseStr2(str){
    return str.split('').reverse().join("");
}
console.log(reverseStr2("ADII"));
