//A queue in data structure follows FIFO(First In First Out) order
//In java script it can be implemented using arrays or queue function.
let que=[];
que.push(11);
que.push(14);
que.push(19);
que.push(9);
console.log(que);

let removedEle=que.shift();
//The shift function deletes an element from the front of the queue
console.log(removedEle);
console.log(que);

//Queue implementation using classes and functions
class Queue{
    constructor()
    {
        this.items=[];
    }
    enque(element)
    {
        this.items.push(element);
    }
    deque()
    {
        if (this.isEmpty())
        {
            return "Queue is empty";
        }
        return this.items.shift();

    }
    Qsize(){
        return que.length;
    }
    isEmpty()
    {
        return this.items.length===0;
    }
    Qfront(){
        if(this.isEmpty())
        {
            return "Queue is Empty"
        }
        return this.items[0];
    }
    display() {
        if (this.isEmpty()) {
          console.log("Queue is empty");
        } else {
          console.log("Queue elements:", this.items.join(", "));
        }
      }
}
let q=new Queue
q.enque(11);
q.enque(2);
q.enque(34);
q.enque(4);
q.display();
console.log(q.Qfront());

console.log(q.deque());
q.display();
console.log(q.Qsize());



