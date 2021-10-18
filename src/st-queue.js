const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

module.exports = class Queue {

  constructor() {
    this.queue = null;
}

  getUnderlyingList() {

    return this.queue;
  }
  
  enqueue(incomer) {
    
    let newNode = new ListNode(incomer);

        if (this.queue === null) {
            this.queue = newNode;

        } else {

            let currentNode = this.queue;

            while (currentNode.next) {
              currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        };
  };

  dequeue() {

    let deQueued = this.queue.value;
    this.queue = this.queue.next;
    return deQueued;
  }

};
