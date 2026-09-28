class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length !== t.length){
        return false
       }

       const hash = {}

       for(const char of s){
        hash[char] = (hash[char] || 0) + 1
       }

       for(const char of t){
        if(!hash[char]){
            return false
        }
        hash[char] -= 1
       }
       return true
    }
}
