class MyStack {
    constructor() {
        this.items = []
        this.count = 0;
    }

    //Add to Stack
    push(x) {
        this.items[this.count] = x;
        this.count += 1;
    }

    //Delete from Stack
    pop() {
        if (this.count == 0) return;
        let r = this.items[this.count - 1];
        this.count -= 1;
        return r;
    }

    //peek
    top() {
        return this.items[this.count - 1];
    }

    //isEmpty
    empty() {
        return this.count == 0;
    }
}

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {

};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */