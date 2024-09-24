// Node Class Definition
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// SinglyLinkedList Class Definition
class SinglyLinkedList {
    constructor() {
        this.head = null; // First node of the list
        this.size = 0; // Track the size of the list
    }

    // Append element at the end of the list
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

    // Append element at the front of the list
    appendAtTheFront(value) {
        const newNode1 = new Node(value); // Use the Node class
        if (this.head === null) {
            this.head = newNode1;
        } else {
            newNode1.next = this.head; // Corrected this.head usage
            this.head = newNode1; // Update head to new node
        }
        this.size++;
    }

    // Delete the last element of the list
    deleteAtTheLast() {
        if (this.head === null) {
            console.log("List is empty");
            return;
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

    // Delete the first element of the list
    deleteAtTheFront() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    // Delete a particular item from the list
    deleteTheParticular(item) {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        // Check if the item is the head
        if (this.head.value === item) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let cur = this.head;
        while (cur.next) {
            if (cur.next.value === item) {
                cur.next = cur.next.next; // Bypass the node
                this.size--;
                return;
            }
            cur = cur.next; // Move to the next node
        }
        console.log("Item not found");
    }

    // Display the linked list
    display() {
        let cur = this.head;
        const values = [];
        while (cur) {
            values.push(cur.value);
            cur = cur.next;
        }
        console.log(values.join(" -> "));
    }

    // Get the size of the linked list
    sllSize() {
        return this.size;
    }
}

// Example usage
const Sll = new SinglyLinkedList();
Sll.appendAtTheEnd(10);
Sll.appendAtTheEnd(12);
Sll.appendAtTheEnd(13);
Sll.appendAtTheEnd(17);
Sll.display(); // Output: 10 -> 12 -> 13 -> 17
Sll.deleteAtTheFront();
Sll.display();
Sll.deleteAtTheLast();
Sll.display();
Sll.deleteTheParticular(13);
Sll.display()
Sll.appendAtTheFront(20);
Sll.display();