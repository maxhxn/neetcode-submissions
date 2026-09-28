class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = {}
        const count = {}

        for(const num of nums){
            count[num] = (count[num] || 0) + 1
        }

        for(let i=0; i<=nums.length; i++){
            bucket[i] = []
        }

        for(const num in count){
            const freq = count[num]
            bucket[freq].push(Number(num))
        }

        const res = []

        for(let i=nums.length; i>0 && res.length < k; i--){
            for(const num of bucket[i]){
                res.push(num)
                if(res.length === k){
                    break
                }
            }
        }

        return res
    }
}
