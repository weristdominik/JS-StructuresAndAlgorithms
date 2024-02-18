class MyQueue {
    constructor() {
        this.items = []
    }

    push(x) {
        this.items.push(x);
    }

    pop() {
        let r = this.items.shift();
        return r;
    }

    peek() {
        if (this.items.length === 0) return null;
        let r = this.items[0];
        return r;
    }

    empty() {
        return this.items.length === 0;
    }
}