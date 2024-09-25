class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class CircularSinglyLinkedList{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }
    prepend(data)
    {
        const newNode=new Node(data);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
            newNode.next=this.head;
        }
        newNode.next=this.head;
        this.head=newNode;
        this.tail.next=newNode;
    }
    append(data)
    {
        const newNode=new Node(data);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
            newNode.next=this.head;
        }
        else{
           this.tail.next=newNode;
           this.tail=newNode;
           this.tail.next=this.head;
        }
        console.log("Appended"+data);
        
    }
    delete(item)
    {
        if(!this.head)
        {
            console.log("List empty");
            return;
        }
        let cur=this.head;
        let prev=null;
        if(cur.data===item)
        {
            if(this.head==this.tail)
            {
                this.head=null;
                this.tail=null;
            }
            this.head=this.head.next;
            this.tail.next=this.head;
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
        }while(cur!=this.head)
    }
    printList(){
        if(!this.head)
        {
           console.log("List Empty");
           return;
        }
        let cur=this.head;
        do{
            console.log(cur.data);
            cur=cur.next;
        }while(cur!=this.head)
    }
    find(item)
    {
        if(this.head===null)
           { 
              console.log("List empty");
              return;
           }
        let cur=this.head;
        do{
          if(cur.data===item)
           {
            return cur;
           }
           cur=cur.next;
         }while(cur!=this.head)
            
    }
}
let csll=new CircularSinglyLinkedList();
csll.append(12);
csll.append(56);
csll.append(7);
csll.append(10);
csll.prepend(89);
console.log("This is the circular singly linked list");
csll.printList();
csll.delete(12);
console.log("Deleted 12 the new list is:");
csll.printList();
console.log("Find 56",csll.find(56));
