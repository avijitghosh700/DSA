class Queue {
  constructor(size) {
    this.size = size;
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.tail - this.head;
  }

  peek() {
    return this.items[this.head];
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    // delete this.items[this.head];
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
