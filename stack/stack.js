// In JavaScript, a stack is a data structure that follows the 
// Last In, First Out (LIFO) principle, meaning the last element
//  added to the stack will be the first one to be removed. 
//  Stacks are useful for various applications, including parsing expressions, 
// backtracking algorithms, and undo mechanisms in software.

let arr=[];
arr.push(11);
arr.push(12);
arr.push(13);
console.log(arr);
let ele_remove=arr.pop()
console.log(ele_remove);
console.log(arr)
// The above example is of using Stack Using an Array
// Arrays in JavaScript can function as a stack with two primary methods:

// push(element): Adds an element to the top of the stack.
// pop(): Removes and returns the element at the top of the stack.



//Stack using class
class stack{
    constructor()
    {
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty())
        {
            return "Stack is empty";
        }
        return this.items[this.items.length-1];
    }
    isEmpty()
    {
        return this.items.length===0;
    }
    size()
    {
        return this.items.length;
    }
    clear()
    {
        this.items=[];
    }
}
let st=new stack();
st.push(12);
st.push(14);
st.push(15);
console.log(st);
console.log(st.peek());

console.log(st.pop());
console.log(st);
console.log(st.size());
//console.log(st.clear());




 