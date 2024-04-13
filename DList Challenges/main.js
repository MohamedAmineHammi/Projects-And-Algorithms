// DList: Prepend Value
function prependValue(dlist, newVal, existingVal) {
    const newNode = new Node(newVal);
    let current = dlist.head;
    
    while (current) {
      if (current.value === existingVal) {
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev = newNode;
        
        if (current === dlist.head) {
          dlist.head = newNode;
        } else {
          newNode.prev.next = newNode;
        }
        
        return;
      }
      
      current = current.next;
    }
  }

  //DList: Kth-to-Last Value
  function kthToLastValue(dlist, k) {
    let slow = dlist.head;
    let fast = dlist.head;
    
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null; // k is larger than the length of the list
      }
      fast = fast.next;
    }
    
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    
    return slow.value;
  }