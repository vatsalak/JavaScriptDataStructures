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
            newNode.next=this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            newNode.next=this.head;
        }
        console.log(`Appended ${data} to the list.`);
    }
    printlist(){
        if(!this.head) return;
        let cur=this.head;
        do{
            console.log(cur.data);
            cur=cur.next;
            
        }while(cur!=this.head)

    }
    find(item)
    {
        if(!this.head) return null;
        let cur=this.head;
        do{
            if(cur.data===item)
            {
                return cur;
            }
            cur=cur.next;

        }while(cur!==this.head)
        return null;
    }
    delete(item)
    {
        if(!this.head)
        {
            console.log("List Empty");
            return;            
        }
        let cur=this.head;
        let prev=null;
        if(cur.data===item)
        {
            if(this.head===this.tail)
            {
                this.head=null;
                this.tail=null;
            }
            else{
                this.head=this.head.next;
                this.tail.next=this.head;
            }
        }
        do{
            prev=cur;
            cur=cur.next;
            if(cur.data===item)
            {
                prev.next=cur.next;
                if(cur===this.tail)
                {
                    this.tail=prev;
                }

            }
        }while(cur!==this.head)
    }
}
let cdll=new DoublyLinkedList();


cdll.append(10);
cdll.append(12);
cdll.append(16);
cdll.append(18);
console.log("List");
cdll.printlist();
cdll.delete(12);
console.log("List after deleting 12");
cdll.printlist();
console.log("Find 16 in the list",cdll.find(16));