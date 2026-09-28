class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set()

        for(const num of nums){
            if(hash.has(num)){
                return true
            }
            hash.add(num)
        }
        return false
    }
}
