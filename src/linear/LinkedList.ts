/**
 * Node class for LinkedList
 */
class ListNode<T> {
  data: T;
  next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

/**
 * LinkedList data structure implementation
 * A linear collection of nodes where each node contains data and a reference to the next node
 */
export class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private length: number = 0;

  /**
   * Add an element to the end of the list
   * @param data - The data to add
   */
  append(data: T): void {
    const newNode = new ListNode(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  /**
   * Add an element to the beginning of the list
   * @param data - The data to add
   */
  prepend(data: T): void {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /**
   * Insert an element at a specific index
   * @param index - The index to insert at
   * @param data - The data to insert
   */
  insert(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new ListNode(data);
    let current = this.head;
    
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }
    
    newNode.next = current!.next;
    current!.next = newNode;
    this.length++;
  }

  /**
   * Remove the first occurrence of an element
   * @param data - The data to remove
   * @returns true if element was removed, false otherwise
   */
  remove(data: T): boolean {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.length--;
      return true;
    }

    return false;
  }

  /**
   * Remove element at a specific index
   * @param index - The index to remove from
   * @returns The removed element, or undefined if index is invalid
   */
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      const data = this.head!.data;
      this.head = this.head!.next;
      this.length--;
      return data;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current!.next;
    }

    const nodeToRemove = current!.next!;
    current!.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove.data;
  }

  /**
   * Get element at a specific index
   * @param index - The index to get from
   * @returns The element at index, or undefined if index is invalid
   */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }

  /**
   * Find the index of an element
   * @param data - The data to find
   * @returns The index of the element, or -1 if not found
   */
  indexOf(data: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * Check if the list contains an element
   * @param data - The data to check for
   * @returns true if element exists, false otherwise
   */
  contains(data: T): boolean {
    return this.indexOf(data) !== -1;
  }

  /**
   * Get the number of elements in the list
   * @returns The size of the list
   */
  size(): number {
    return this.length;
  }

  /**
   * Check if the list is empty
   * @returns true if list is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.length === 0;
  }

  /**
   * Clear all elements from the list
   */
  clear(): void {
    this.head = null;
    this.length = 0;
  }

  /**
   * Convert list to array
   * @returns Array representation of the list
   */
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  /**
   * String representation of the list
   * @returns String showing list contents
   */
  toString(): string {
    return `LinkedList(${this.length}): [${this.toArray().join(' -> ')}]`;
  }
}