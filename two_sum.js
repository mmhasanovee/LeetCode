/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    var resArray =[];
    for(var x=0; x<nums.length; x++){
        for(var y=x+1; y<nums.length; y++){
            if(nums[x] + nums[y] == target){
                resArray[0] = x;
                resArray[1] = y;
            }
        }
    }
    return resArray;
};