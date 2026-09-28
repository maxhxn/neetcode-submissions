class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        let res = 0
        for(const op of operations){
            if(op === '+'){
                let top = stack.pop()
                let newTop = top + stack[stack.length - 1]
                stack.push(top)
                stack.push(newTop)
                res += newTop
            } else if(op === 'D'){
                stack.push(2 * stack[stack.length - 1])
                res += stack[stack.length - 1]
            } else if (op === 'C'){
                res -= stack.pop()
            } else {
                stack.push(parseInt(op))
                res += stack[stack.length - 1]
            }
        }
        return res
    }
}
