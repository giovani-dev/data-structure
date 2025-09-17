/**
 * TreeNode class for Binary Search Tree
 */
class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

/**
 * Binary Search Tree implementation
 * A tree data structure where left children are smaller and right children are larger
 */
export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;
  private compareFunction: (a: T, b: T) => number;

  constructor(compareFunction?: (a: T, b: T) => number) {
    this.compareFunction = compareFunction || this.defaultCompare;
  }

  private defaultCompare(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  /**
   * Insert a value into the tree
   * @param data - The data to insert
   */
  insert(data: T): void {
    this.root = this.insertNode(this.root, data);
  }

  private insertNode(node: TreeNode<T> | null, data: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(data);
    }

    const comparison = this.compareFunction(data, node.data);
    if (comparison < 0) {
      node.left = this.insertNode(node.left, data);
    } else if (comparison > 0) {
      node.right = this.insertNode(node.right, data);
    }
    // If equal, don't insert (no duplicates)

    return node;
  }

  /**
   * Search for a value in the tree
   * @param data - The data to search for
   * @returns true if found, false otherwise
   */
  search(data: T): boolean {
    return this.searchNode(this.root, data);
  }

  private searchNode(node: TreeNode<T> | null, data: T): boolean {
    if (node === null) return false;

    const comparison = this.compareFunction(data, node.data);
    if (comparison === 0) return true;
    if (comparison < 0) return this.searchNode(node.left, data);
    return this.searchNode(node.right, data);
  }

  /**
   * Remove a value from the tree
   * @param data - The data to remove
   */
  remove(data: T): void {
    this.root = this.removeNode(this.root, data);
  }

  private removeNode(node: TreeNode<T> | null, data: T): TreeNode<T> | null {
    if (node === null) return null;

    const comparison = this.compareFunction(data, node.data);
    
    if (comparison < 0) {
      node.left = this.removeNode(node.left, data);
    } else if (comparison > 0) {
      node.right = this.removeNode(node.right, data);
    } else {
      // Node to be deleted found
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Node with two children: get inorder successor
      const minRight = this.findMin(node.right);
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
    }

    return node;
  }

  private findMin(node: TreeNode<T>): TreeNode<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  /**
   * In-order traversal (left, root, right)
   * @returns Array of elements in sorted order
   */
  inorderTraversal(): T[] {
    const result: T[] = [];
    this.inorderHelper(this.root, result);
    return result;
  }

  private inorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.inorderHelper(node.left, result);
      result.push(node.data);
      this.inorderHelper(node.right, result);
    }
  }

  /**
   * Pre-order traversal (root, left, right)
   * @returns Array of elements in pre-order
   */
  preorderTraversal(): T[] {
    const result: T[] = [];
    this.preorderHelper(this.root, result);
    return result;
  }

  private preorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      result.push(node.data);
      this.preorderHelper(node.left, result);
      this.preorderHelper(node.right, result);
    }
  }

  /**
   * Post-order traversal (left, right, root)
   * @returns Array of elements in post-order
   */
  postorderTraversal(): T[] {
    const result: T[] = [];
    this.postorderHelper(this.root, result);
    return result;
  }

  private postorderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node !== null) {
      this.postorderHelper(node.left, result);
      this.postorderHelper(node.right, result);
      result.push(node.data);
    }
  }

  /**
   * Get the height of the tree
   * @returns The height of the tree
   */
  height(): number {
    return this.getHeight(this.root);
  }

  private getHeight(node: TreeNode<T> | null): number {
    if (node === null) return -1;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  /**
   * Check if the tree is empty
   * @returns true if tree is empty, false otherwise
   */
  isEmpty(): boolean {
    return this.root === null;
  }

  /**
   * Get the minimum value in the tree
   * @returns The minimum value, or undefined if tree is empty
   */
  findMinValue(): T | undefined {
    if (this.root === null) return undefined;
    return this.findMin(this.root).data;
  }

  /**
   * Get the maximum value in the tree
   * @returns The maximum value, or undefined if tree is empty
   */
  findMaxValue(): T | undefined {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  /**
   * String representation of the tree
   * @returns String showing tree structure
   */
  toString(): string {
    if (this.isEmpty()) return 'Empty BST';
    return `BST: [${this.inorderTraversal().join(', ')}]`;
  }
}