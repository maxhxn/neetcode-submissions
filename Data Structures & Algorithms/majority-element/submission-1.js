class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        /*
        const hash = {}
        for(const num of nums){
            hash[num] = (hash[num] || 0) + 1
        }

        for(const num of nums){
            if(hash[num] > Math.floor(nums.length/2)){
                return num
            }
        }
        */
        let count = 0, res = 0;
        for(const num of nums){
            if(count === 0){
                res = num
            }
            count += num === res ? 1 : -1
        }
        return res
    }
}
