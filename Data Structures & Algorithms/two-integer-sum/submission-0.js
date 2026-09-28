class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}

        for(let i=0; i<nums.length; i++){
            const complement = target - nums[i]
            if(hash[complement] !== undefined){
                return [i, hash[complement]]
            }
            hash[nums[i]] = i
        }
    }
}
