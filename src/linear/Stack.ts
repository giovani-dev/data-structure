/**
 * Stack data structure implementation
 * A Last-In-First-Out (LIFO) data structure
 */
export class Stack<T> {
  private items: T[] = [];

  /**
   * Add an element to the top of the stack
   * @param element - The element to add
   */
  push(element: T): void {
    this.items.push(element);
  }

  /**
   * Remove and return the top element from the stack
   * @returns The top element, or undefined if stack is empty
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * Look at the top element without removing it
   * @returns The top element, or undefined if stack is empty
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Check if the stack is empty
   * @returns true if stack is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get the number of elements in the stack
   * @returns The size of the stack
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clear all elements from the stack
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Convert stack to array (bottom to top)
   * @returns Array representation of the stack
   */
  toArray(): T[] {
    return [...this.items];
  }

  /**
   * String representation of the stack
   * @returns String showing stack contents
   */
  toString(): string {
    return `Stack(${this.items.length}): [${this.items.join(', ')}]`;
  }
}