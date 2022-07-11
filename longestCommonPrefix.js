/**
 * @param {string[]} strs
 * @return {string}
 */
//https://leetcode.com/problems/longest-common-prefix
var longestCommonPrefix = function(strs) {
    
    let firstStr = strs[0];
    console.log(firstStr);
    for (let i = 0; i < firstStr.length; i++) {
        for (let s of strs) {
            if (s[i] !== firstStr[i]) return s.slice(0, i);
        }
    }
    return strs[0];
};
