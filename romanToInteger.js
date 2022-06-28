/**
 * @param {string} s
 * @return {number}
 */
//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
    let romanToValueMap = new Map([ ["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000 ]]);
    let sx = "MCMXCIV"
    let result = 0;
    let i;
    s = s.replace("IV","IIII").replace("IX","VIIII");
    s = s.replace("XL","XXXX").replace("XC","LXXXX");
    s = s.replace("CD","CCCC").replace("CM","DCCCC");
    
    for(i=0; i< s.length; i++){
        let inx = parseInt(romanToValueMap.get(s.charAt(i)));
        console.log(inx,'dd');
        result = inx + result;
        console.log(result);
    }
    
    return result;
};
