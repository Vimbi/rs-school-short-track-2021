// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.items = ListNode;
  }

  get size() {
    // return this.items.length;
  }

  enqueue(/* element */) {
    // this.items.push(element);
  }

  dequeue() {
    // if (this.items.lenght === 0) return undefined;
    // return this.items.shift();
  }
}

module.exports = Queue;
