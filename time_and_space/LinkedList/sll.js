// We create a class for each node within the list
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value) {
      this.value = value; // The value of the node
      this.next = null; // Pointer to the next node, initially null
    }
  }
  
  class SinglyLinkedList {
    constructor() {
        this.head = null; // First node of the list
        this.size = 0; // Track the size of the list
    }
  
    appendAtTheEnd(value) {
        const newNode = new Node(value); // Use the Node class with a capital 'N'
        if (this.head === null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++;
    }
  
    appendAtTheFront(value) {
      const newNode1 = new Node(value);
      if (this.head === null) this.head = newNode1;
      else {
        newNode1.next = this.head;
        this.head = newNode1;
      }
    }
  
    deleteAtTheLast() {
      if (this.head === null) {
        return "List is empty";
      }
      if (this.head.next === null) {
        this.head = null; // If there is only one node in the list
      } else {
        let cur = this.head;
        while (cur.next && cur.next.next) {
          // Traverse till the second last node
          cur = cur.next;
        }
        cur.next = null;
      }
      this.size--;
    }
  
    deleteAtheFront() {
      if (this.head === null) {
        return "List is empty";
      }
      this.head = this.head.next;
      this.size--;
    }
  
    deleteTheParticular(item) {
      if (this.head === null) {
        return "List is empty";
      } else {
        if (this.head.value === item) {
          this.head = this.head.next;
          this.size--;
          return;
        } else {
          let cur = this.head;
          while (cur.next) {
            if (cur.next.value === item) {
              cur.next = cur.next.next;
              this.size--;
              return;
            }
            cur = cur.next;
          }
        }
      }
      return "Item not found"; // Return message if item not found
    }
  
    display() {
        let cur = this.head;
        const values = [];
        while (cur) {
            values.push(cur.value);
            cur = cur.next;
        }
        console.log(values.join(" -> "));
    }
  
    sllSize() {
      return this.size;
    }
  }
  
  const Sll = new SinglyLinkedList();
  Sll.appendAtTheEnd(10);
  Sll.appendAtTheEnd(12);
  Sll.appendAtTheEnd(13);
  Sll.appendAtTheEnd(17);
  Sll.display();
  Sll.appendAtTheFront(14);
  Sll.appendAtTheFront(15);
  Sll.display();
  Sll.deleteTheParticular(13);
  Sll.display();
  Sll.deleteAtTheLast();
  Sll.display();
  Sll.deleteAtheFront();
  Sll.display();