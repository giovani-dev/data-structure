import { Stack } from './linear/Stack';
import { Queue } from './linear/Queue';
import { LinkedList } from './linear/LinkedList';
import { BinarySearchTree } from './tree/BinarySearchTree';

/**
 * Main entry point for the data structures project
 * This file demonstrates the usage of various data structures
 */

console.log('🚀 Data Structures Study Project');
console.log('================================\n');

// Stack demonstration
console.log('📚 Stack Example:');
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(`Stack size: ${stack.size()}`);
console.log(`Top element: ${stack.peek()}`);
console.log(`Popped: ${stack.pop()}`);
console.log(`Stack after pop: [${stack.toArray().join(', ')}]\n`);

// Queue demonstration
console.log('🔄 Queue Example:');
const queue = new Queue<string>();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(`Queue size: ${queue.size()}`);
console.log(`Front element: ${queue.front()}`);
console.log(`Dequeued: ${queue.dequeue()}`);
console.log(`Queue after dequeue: [${queue.toArray().join(', ')}]\n`);

// LinkedList demonstration
console.log('🔗 LinkedList Example:');
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.insert(1, 15);
console.log(`List size: ${list.size()}`);
console.log(`Element at index 2: ${list.get(2)}`);
console.log(`List: [${list.toArray().join(', ')}]`);
list.remove(15);
console.log(`After removing 15: [${list.toArray().join(', ')}]\n`);

// Binary Search Tree demonstration
console.log('🌳 Binary Search Tree Example:');
const bst = new BinarySearchTree<number>();
const values = [50, 30, 70, 20, 40, 60, 80];
values.forEach(val => bst.insert(val));
console.log(`Tree height: ${bst.height()}`);
console.log(`Min value: ${bst.findMinValue()}`);
console.log(`Max value: ${bst.findMaxValue()}`);
console.log(`Search for 40: ${bst.search(40)}`);
console.log(`Search for 25: ${bst.search(25)}`);
console.log(`In-order traversal: [${bst.inorderTraversal().join(', ')}]`);
console.log(`Pre-order traversal: [${bst.preorderTraversal().join(', ')}]`);
bst.remove(30);
console.log(`After removing 30: [${bst.inorderTraversal().join(', ')}]`);