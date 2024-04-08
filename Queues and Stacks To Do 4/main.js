// Reorder Absolute Queue
function reorderAbsoluteQueue(queue) {
    const stack = [];
  
    while (!queue.isEmpty()) {
      const num = queue.dequeue();
      if (num < 0) {
        stack.push(num);
      } else {
        while (stack.length > 0 && stack[stack.length - 1] < 0) {
          queue.enqueue(stack.pop());
        }
        queue.enqueue(num);
      }
    }
  
    while (stack.length > 0) {
      queue.enqueue(stack.pop());
    }
  
    return queue;
  }

  //Stack: Partition:
  function partitionStack(stack) {
    const queue = new Queue();
  
    while (!stack.isEmpty()) {
      const num = stack.pop();
      if (num <= 0) {
        queue.enqueue(num);
      } else {
        stack.push(num);
      }
    }
  
    while (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }
  
    return stack;
  }

  //Stack: Is Sorted:
  function isStackSorted(stack) {
    const tempStack = new Stack();
    let prev = stack.pop();
  
    while (!stack.isEmpty()) {
      const current = stack.pop();
  
      if (current > prev) {
        while (!tempStack.isEmpty()) {
          stack.push(tempStack.pop());
        }
        return false;
      }
  
      tempStack.push(prev);
      prev = current;
    }
  
    while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
    }
  
    return true;
  }