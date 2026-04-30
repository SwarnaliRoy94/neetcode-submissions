class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dupSet = new Set(nums);
        console.log(dupSet.length);
        if (nums.length !== dupSet.size){
            return true;
        }
        else return false;
    }
}
