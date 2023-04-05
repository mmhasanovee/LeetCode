//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
class Solution {
    public int strStr(String haystack, String needle) {
        // If the needle is empty, it means that it is a substring of any string.
        // Thus, it is always at index 0 of the haystack string.
        if (needle.isEmpty()) {
            return 0;
        }
        
        // Use the indexOf() method to find the index of the first occurrence of
        // the needle string in the haystack string.
        int index = haystack.indexOf(needle);
        
        // Return the index of the first occurrence of the needle string in the haystack string.
        // If the needle string is not found in the haystack string, the indexOf() method returns -1.
        return index;
    }
}
