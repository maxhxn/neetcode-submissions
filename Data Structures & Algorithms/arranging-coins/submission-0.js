class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let rows = 0
        while(n - rows > 0){
            rows++
            n -= rows
        }
        return rows
    }
}
