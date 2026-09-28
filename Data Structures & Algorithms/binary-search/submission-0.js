class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1
        while(r-l+1 >= 1){
            let m = Math.floor((r+l)/2)
            if(nums[m] < target){
                l = m+1
            } else if(nums[m] > target){
                r = m - 1
            } else if(nums[m] === target){
                return m
            } 
        }
        return -1
    }
}
