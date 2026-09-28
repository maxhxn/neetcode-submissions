class MyQueue {
    constructor() {
        this.queue = []
        this.tempQueue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.tempQueue.length === 0){
            while(this.queue.length > 0){
                this.tempQueue.push(this.queue.pop())
            }
        }
        return this.tempQueue.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if(this.tempQueue.length === 0){
            while(this.queue.length > 0){
                this.tempQueue.push(this.queue.pop())
            }
        }
        return this.tempQueue[this.tempQueue.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0 && this.tempQueue.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
