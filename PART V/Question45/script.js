// Write a function to find maximum of 2 number
function max(a,b){
    if(a>b){
        return a;
    }
    else if(b>a){
        return b;
    }
    else return "Nunu";
}
var a =2;
var b =5;
console.log("The greater number is",max(a,b));