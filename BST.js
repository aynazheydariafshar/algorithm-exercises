/**
Please implement the find and contains to the following Binary Search Tree
**/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (!current) return undefined;
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    // find the node based on the given value
    // return value should be the found node or undefined
  }
  contains(value) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      if (!current) return false;
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    // return true or false if the contains the given value or not
  }
}

const binarySearch = new BinarySearchTree();
binarySearch.insert(10);
binarySearch.insert(16);
binarySearch.insert(3);
console.log(binarySearch.find(10));
console.log(binarySearch.contains(12));
