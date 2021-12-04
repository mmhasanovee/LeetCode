//https://leetcode.com/problems/single-number-ii/submissions/

class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> map = new HashMap<Integer,Integer>();
        int x;
        for(x=0; x<nums.length; x++){
            if(map.get(nums[x]) == null){
               map.put(nums[x], 0);
            }
            else{
               map.put(nums[x], map.get(nums[x])+1);
            }
        }
        for(Integer key:map.keySet()){
            if(map.get(key).equals(0)) {
                return key;
            }
        }
        return 0;
    }
}