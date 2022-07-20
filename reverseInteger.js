/**
 * @param {number} x
 * @return {number}
 */
//https://leetcode.com/problems/reverse-integer/submissions/
var reverse = function(x) {
    let revS = reverseString(x.toString());
    console.log(revS);
    if(parseInt(revS) >= -2147483648 && parseInt(revS)<=2147483647){
    return revS;}
    else{
        return 0;
    }
};

function reverseString(str) {
    var newString = "";
    let xo = 0;
    
    if(str.charAt(0) == '-'){
        
        newString = '-';
        xo =1;
    }
    
    for (var i = str.length - 1; i >= xo; i--) {
        newString += str[i];
    }
    return newString;
}
