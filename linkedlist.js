class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.count = 0;
    }
  
    getlength() {
      return this.count;
    }
  
    addLast(data) {
      // Create a new Node
      const node = {
        data: data,
        next: null
      };
  
      if (this.count === 0) {
        // If this is the first Node, assign it to head
        this.head = node;
      } else {
        // If not the first node, link it to the last node
        this.tail.next = node;
      }
  
      this.tail = node;
  
      this.count++;
    }
  
    addFirst(data) {
      // Create a new Node
      const node = {
        data: data,
        node : node,
        next: null
      };
  
      // Save the first Node
      const temp = this.head;
  
      // Point head to the new Node
      this.head = node;
  
      // Add the rest of node behind the new first Node
      this.head.next = temp;
  
      this.count++;
  
      if (this.count === 1) {
        // If first node,
        // point tail to it as well
        this.tail = this.head;
      }
    }
  
    removeFirst() {
      if (this.count > 0) {
        // The head should point to the second element
        this.head = this.head.next;
  
        this.count--;
  
        if (this.count === 0) {
          // If list empty, set tail to null
          this.tail = null;
        }
      }
    }
  
    removeLast() {
      if (this.count > 0) {
        if (this.count === 1) {
          this.head = null;
          this.tail = null;
        } else {
          // Find the Node right before the last Node
          let current = this.head;
          while (current.next !== this.tail) {
            current = current.next;
          }
  
          current.next = null;
          this.tail = current;
        }
        this.count--;
      }
    }
  
    indexOf(value) {
      let index = 0;
      let current = this.head;
  
      while (current !== null) {
        if (current.data === value) return index;
        current = current.next;
        index++;
      }
      return -1;
    }
  
    contains(value) {
      return this.indexOf(value) !== -1;
    }
    
    //This method converts the linked list to an array
    toArray() {
      let current = this.head;
      let array = [];
      let index = 0;
      while (current !== null) {
        array[index++] = current.data;
        current = current.next;
      }
      return array;
    }
  }

exports.LinkedList = LinkedList