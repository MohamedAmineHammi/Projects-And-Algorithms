// Node class for BST
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  // Binary Search Tree class
class BST {
    constructor() {
      this.root = null;
    }
}

  // Insert a value into BST
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          // Ignore duplicate values
          break;
        }
      }
    }
  }

    // Traverse BST in pre-order
    bstPreOrder() {
        if (!this.root) return;
    
        const stack = [];
        stack.push(this.root);
    
        while (stack.length) {
          const node = stack.pop();
          console.log(node.value);
    
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);
        }
      }

        // Traverse BST in post-order
  bstPostOrder() {
    if (!this.root) return;

    const stack1 = [];
    const stack2 = [];
    stack1.push(this.root);

    while (stack1.length) {
      const node = stack1.pop();
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }

    while (stack2.length) {
      const node = stack2.pop();
      console.log(node.value);
    }
  }

    // Convert BST to array (in-order traversal)
    bst2Arr() {
        const result = [];
        const stack = [];
        let current = this.root;
    
        while (true) {
          if (current) {
            stack.push(current);
            current = current.left;
          } else if (stack.length) {
            current = stack.pop();
            result.push(current.value);
            current = current.right;
          } else {
            break;
          }
        }
    
        return result;
      }

        // Convert BST to array (pre-order traversal)
  bst2ArrPre() {
    const result = [];
    const stack = [];
    if (this.root) stack.push(this.root);

    while (stack.length) {
      const node = stack.pop();
      result.push(node.value);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return result;
  }