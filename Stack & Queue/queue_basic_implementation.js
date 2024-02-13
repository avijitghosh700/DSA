class Queue {
  constructor(size) {
    this.size = size;
    this.items = [];
    this.head = -1;
    this.tail = -1;
  }

  isEmpty() {
    if (this.head < 0 || this.head > this.tail) {
      return true;
    }

    return false;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.items[this.head] ?? 'No items remain';
  }

  enqueue(item) {
    if (this.size - 1 === this.tail) {
      return new Error("Queue is full");
    }

    if (this.head < 0) this.head++;

    this.tail++;
    this.items[this.tail] = item;

    return this.items;
  }

  dequeue() {
    if (this.isEmpty()) {
      return new Error("Queue is empty");
    }

    const item = this.items[this.head];
    this.head++;
    
    return item;
  }

  clear() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
    return this.items;
  }
}

const queue = new Queue(5);
console.log('ENQUEUE:', queue.enqueue(1));
console.log('ENQUEUE:', queue.enqueue(2));
console.log('ENQUEUE:', queue.enqueue(3));
console.log('ENQUEUE:', queue.enqueue(12));
// console.log('ENQUEUE:', queue.enqueue(233));
// console.log('ENQUEUE:', queue.enqueue(31));

console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());
console.log('DEQUEUE:', queue.dequeue());

console.log('PEEK:', queue.peek());

console.log('EMPTY:', queue.isEmpty());
