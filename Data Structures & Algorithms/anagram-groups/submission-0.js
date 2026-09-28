class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}
        for(const str of strs){
            const count = new Array(26).fill(0)

            for(const char of str){
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            const key = count.join(",")

            if(!hash[key]){
                hash[key] = []
            }

            hash[key].push(str)
        }
        return Object.values(hash)
    }

}
