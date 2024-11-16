class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
    this.length = 0;
  }

  addToHead(val) {
    const newDLL = new DoublyLinkedListNode(val);

      if(!this.head){
        this.head = newDLL;
        this.tail = newDLL;
      }
      else{
        newDLL.next = this.head
        this.head.prev = newDLL;
        this.head = newDLL;
      }

      this.length++;
  }

  addToTail(val) {
    const newDLL = new DoublyLinkedListNode(val);

    if(!this.head){
      this.head = newDLL;
      this.tail = newDLL;
    }
    else{
      this.tail.next = newDLL;
      newDLL.prev = this.tail;
      this.tail = newDLL;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
