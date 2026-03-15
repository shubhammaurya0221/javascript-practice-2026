// Write a nested loop that print grid matrix of 3x3
var hold=1;
for(var i= 1; i<=3;i++){
    var str = "";
    for(var j=1; j<=3;j++){
        str += `${hold} `;
        hold++;
    }
    console.log(str)
}