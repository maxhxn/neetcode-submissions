class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = -1, r = nums.length
        while(r > l + 1){
            let m = Math.floor((r+l)/2)
            if(nums[m] >= target){
                r = m
            } else {
                l = m
            }
        }
        return r
    }
}
