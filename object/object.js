// In JavaScript, objects are one of the fundamental data types and 
// are used to store collections of data and more complex entities.
//  An object in JavaScript is a collection of key-value pairs,
//   where the key is a string (or symbol) and the value can be anything, 
//   including other objects, functions, or primitive data types. 
// Here's an overview of how objects work in JavaScript:

//Ways to create objects 
//1.USing object literal
let person={
    name :"John",
    age :12,
    isStudent:true
};

//2.Using new Object() syntax
let person1=new Object()
person1.name="Arya";
person1.age=22;
person1.isStudent=true;

//3.Using Constructor function
function person2(name,age,isStudent)
{
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;
}
let p2=new person2("Rhea",23,true);

//Accessing and Modifying object properties
//There are two way of doing it either by using a dot notation or

console.log(person.name);
person.age=22;

// brecket notation
console.log(person1["name"]);
person1["age"]=21;

//Adding and Deleting Properties
//You can dynamically add or delete properties from an object.

person.city="Bangalore";//Adding properties
delete person.isStudent;//deleting the property

//Methods in object
//A method is function stored as a property in an object
let car={
    brand:"Toyota",
    model:"honda",
    start :function(){
        console.log("car started");
        
    }
};
car.start();

//Object property short hand
let nam="Bob";
let age=28;
let user={nam,age};
console.log(user);

//Destructuring
//Extracting multiple properties from object and assigning them to variables
let person4={names:"Charlie",agee:19};
let { names, agee } =person4;
console.log(names);
console.log(agee);

//Object methods like object.keys() and object.values()
console.log(Object.keys(person4));
console.log(Object.values(person4));
console.log(Object.entries(person4));
// Object.keys(obj) – Returns an array of keys in obj.
// Object.values(obj) – Returns an array of values in obj.
// Object.entries(obj) – Returns an array of [key, value] pairs.

//Prototype and inheritance
function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log(this.name + " Makes sound");
    
};
let dog= new Animal("Dog");
dog.speak();
// JavaScript objects can inherit properties and methods from a prototype.
//  Every JavaScript object has a prototype, which is also an object.
//   The prototype object contains methods and properties
//  that are available to all instances of the object.
class Person5{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

greet(){
    console.log(`Hello,my name is ${this.name} and I am ${this.age} years old`);
    
}
}
let p=new Person5("shriya",29);
p.greet();
// Objects are central to how JavaScript works and are used extensively in almost all aspects of the language, 
// including when working with functions, arrays, 
// and more advanced topics like object-oriented programming and prototypal inheritance.