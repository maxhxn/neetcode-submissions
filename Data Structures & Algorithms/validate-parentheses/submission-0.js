class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for(const char of s){
            if(char === '(' || char === '[' || char === '{'){
                stack.push(char)
            } else {
                if(char === ')' && stack[stack.length - 1] === '('){
                    stack.pop()
                } else if (char === ']' && stack[stack.length - 1] === '['){
                    stack.pop()
                } else if(char === '}' && stack[stack.length - 1] === '{'){
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        if(stack.length === 0){
            return true
        } else {
            return false
        }
    }
}