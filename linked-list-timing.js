const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

linkedList = new LinkedList();

startTime = Date.now();
linkedList.addToHead(10000000000000000000000000000000000000000000000000000000000000000000000000000);
endTime = Date.now();

console.log(startTime);  
console.log(endTime);    

console.log(`Linked List Add to Head Runtime: ${endTime - startTime}ms`);  

startTime = Date.now();
linkedList.addToTail(10000000000000000000000000000000000000000000000000000000000000000000000000000);
endTime = Date.now();

console.log(startTime);  
console.log(endTime);    

console.log(`Linked List Add to Tail Runtime: ${endTime - startTime}ms`);  


doublyLinkedList = new DoublyLinkedList();

startTime = Date.now();
doublyLinkedList.addToHead(10000000000000000000000000000000000000000000000000000000000000000000000000000);
endTime = Date.now();

console.log(startTime); 
console.log(endTime);    

console.log(`Doubly Linked List Add to Head Runtime: ${endTime - startTime}ms`);  

startTime = Date.now();
doublyLinkedList.addToTail(10000000000000000000000000000000000000000000000000000000000000000000000000000);
endTime = Date.now();

console.log(startTime); 
console.log(endTime);    

console.log(`Doubly Linked List Add to Tail Runtime: ${endTime - startTime}ms`);  
