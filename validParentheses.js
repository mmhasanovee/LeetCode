/**
 * @param {string} s
 * @return {boolean}
 */
//https://leetcode.com/problems/valid-parentheses/submissions/
var isValid = function(s) {
    
    let i;
    //let pMap = new Map([ ["(", ")"], ["[", "]"], ["{", "}"]]);
    let stack = [];
    
    for(i=0; i<s.length; i++){
        if(stack.length === 0){
            stack.push(s.charAt(i));
        }
        else if(stack.at(-1) == "(" && s.charAt(i) == ")" ){
            stack.pop();
        }
         else if(stack.at(-1) == "[" && s.charAt(i) == "]" ){
            stack.pop();
        }
         else if(stack.at(-1) == "{" && s.charAt(i) == "}" ){
            stack.pop();
        }
        else{
            stack.push(s.charAt(i));
        }
    }
    return stack.length == 0;
};
