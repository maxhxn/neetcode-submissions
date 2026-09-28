class MyStack {
    constructor() {
         this.stack = new Queue()
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x)

        for(let i=this.stack.size() - 1; i > 0; i--){
            this.stack.push(this.stack.pop())
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.front()
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.isEmpty()
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
