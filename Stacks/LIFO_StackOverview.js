class Stack {
    constructor() {
        this.items = []
        this.count = 0;
    }

    //Add Into Stack
    push(x) {
        this.items[this.count] = x;
        this.count += 1;
        return this.count - 1;
    }

    //Remove Top Element from Stack
    pop() {
        if (this.count == 0) return;
        let r = this.items[this.count - 1];
        count -= 1;
        return r;
    }

    //Check Top Element in Stack
    peek() {
        return this.items[this.count];
    }

    //Check if Stack is Empty
    isEmpty() {
        return this.items == 0;
    }
}