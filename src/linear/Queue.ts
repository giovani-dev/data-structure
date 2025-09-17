/**
 * Queue data structure implementation
 * A First-In-First-Out (FIFO) data structure
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * Add an element to the rear of the queue
   * @param element - The element to add
   */
  enqueue(element: T): void {
    this.items.push(element);
  }

  /**
   * Remove and return the front element from the queue
   * @returns The front element, or undefined if queue is empty
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * Look at the front element without removing it
   * @returns The front element, or undefined if queue is empty
   */
  front(): T | undefined {
    return this.items[0];
  }

  /**
   * Look at the rear element without removing it
   * @returns The rear element, or undefined if queue is empty
   */
  rear(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Check if the queue is empty
   * @returns true if queue is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get the number of elements in the queue
   * @returns The size of the queue
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clear all elements from the queue
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Convert queue to array (front to rear)
   * @returns Array representation of the queue
   */
  toArray(): T[] {
    return [...this.items];
  }

  /**
   * String representation of the queue
   * @returns String showing queue contents
   */
  toString(): string {
    return `Queue(${this.items.length}): [${this.items.join(', ')}]`;
  }
}