//SList: Merge Sort
class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function combineLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    if (list1) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    return dummy.next;
  }
  
  function mergeSortList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
  
    prev.next = null; // Splitting the list into two halves
  
    const left = mergeSortList(head);
    const right = mergeSortList(slow);
  
    return combineLists(left, right);
  }

  //Array: Partition
  function partition(arr, start = 0, end = arr.length) {
    const pivot = arr[start];
    let i = start;
  
    for (let j = start + 1; j < end; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    [arr[start], arr[i]] = [arr[i], arr[start]];
    return i;
  }

  //SList: Partition
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function partitionList(head) {
    if (!head || !head.next) {
      return head;
    }
  
    const pivot = head.val;
    let smallerHead = new ListNode(0);
    let largerHead = new ListNode(0);
    let smaller = smallerHead;
    let larger = largerHead;
    let current = head;
  
    while (current) {
      if (current.val < pivot) {
        smaller.next = current;
        smaller = smaller.next;
      } else {
        larger.next = current;
        larger = larger.next;
      }
      current = current.next;
    }
  
    smaller.next = largerHead.next; // Combining smaller and larger lists
    larger.next = null; // Setting the end of the larger list
  
    return smallerHead.next;
  }