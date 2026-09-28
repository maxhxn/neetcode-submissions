class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        let left = 0, right = num + 1, res;
        while(left <= right){
            let mid = Math.floor((left + right)/2)
            if(mid * mid > num){
                right = mid - 1
            } else if(mid * mid < num) {
                left = mid + 1
            } else {
                return true
            }
        }
        return false
    }
}
