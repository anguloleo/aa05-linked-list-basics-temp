class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  addToHead(val) {
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail(val) {
    let newNode = new LinkedListNode(val);        
    let current;

    if(!this.head){
      this.head = newNode;       
    }
    else{
      current = this.head;

      while(current.next) {           
	      current = current.next;
      }
      current.next = newNode;            
    }
    this.length++;
  }
  
  


  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
