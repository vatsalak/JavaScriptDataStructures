// Node class representing each element of the doubly linked list
class Node {
    constructor(data) {
        this.data = data; // Node data
        this.next = null; // Pointer to next node
        this.prev = null; // Pointer to previous node
    }
}

// Doubly Linked List class
class DoublyLinkedList {
    constructor() {
        this.head = null; // Head of the list
        this.tail = null; // Tail of the list
    }

    // Append a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) { // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        console.log(`Appended ${data} to the list.`);
    }

    // Prepend a node at the beginning
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) { // If the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        console.log(`Prepended ${data} to the list.`);
    }

    // Delete a node with specific data
    delete(data) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let current = this.head;

        while (current) {
            if (current.data === data) {
                // If it's the head node
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } 
                // If it's the tail node
                else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } 
                // If it's a middle node
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                console.log(`Deleted ${data} from the list.`);
                return;
            }
            current = current.next;
        }

        console.log(`${data} not found in the list.`);
    }

    // Display the list from head to tail
    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }

    // Display the list from tail to head (reverse traversal)
    displayReverse() {
        let current = this.tail;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log(result.join(" <-> "));
    }
}

// Testing the Doubly Linked List
const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);

dll.display();        // Output: 5 <-> 10 <-> 20 <-> 30
dll.displayReverse(); // Output: 30 <-> 20 <-> 10 <-> 5

dll.delete(20);
dll.display();        // Output: 5 <-> 10 <-> 30

dll.delete(5);
dll.display();        // Output: 10 <-> 30

dll.delete(30);
dll.display();        // Output: 10
