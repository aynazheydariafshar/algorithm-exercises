/**
  Please add dequeue function to the following Queue 
**/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    const pointer = this.first;
    this.first = this.first.next;
    this.size--;
    return pointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.dequeue();
console.log(myQueue);
