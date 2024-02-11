class Stack {
  constructor(size) {
    this.items = [];
    this.size = size;
    this.lastIndex = -1;
  }

  isFull() {
    return this.lastIndex === this.size - 1;
  }

  isEmpty() {
    return this.lastIndex < 0;
  }

  push(item) {
    if (this.isFull()) {
      return new Error("Stack overflow");
    }
    this.lastIndex++;
    this.items[this.lastIndex] = item;
    return this.items;
  }

  pop() {
    if (this.isEmpty()) {
      return new Error("Stack underflow");
    }
    return this.items[this.lastIndex--];
  }

  peek() {
    return this.items[this.lastIndex];
  }
}

const stack = new Stack(5);

console.log(stack.push(12));
console.log(stack.push(11));
console.log(stack.push(100));
console.log(stack.push(1));
console.log(stack.push(123));
console.log(stack.push(1));
console.log(stack.pop());
console.log(stack.peek());
