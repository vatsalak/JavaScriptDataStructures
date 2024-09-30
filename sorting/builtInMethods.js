//Sort():Used to sort elements of array in place order
//sorts elements as strings in lexicographic order,not alphabetic
//lexicographic=(alphabets+numbers+strings) as string

let fruits=['apple','orange','banana','pomogranate'];
fruits.sort();
console.log(fruits);

let numbers=[1,2,3,4,5,6,7,8,9];
numbers.sort((a,b)=>a-b);
console.log(numbers);

let objects=[{name:"Prasanna",age:15,usn:120},
    {name:"Shree",age:23,usn:121},
    {name:"Ram",age:22,usn:123},
    {name:"Priya",age:24,usn:124},
               
];
objects.sort((a,b)=>a.age-b.age);
console.log(objects);

objects.sort((a,b)=>a.usn-b.usn);
console.log(objects);

objects.sort((a,b)=>a.name.localeCompare(b.name));
console.log(objects);
