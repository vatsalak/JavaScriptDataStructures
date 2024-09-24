//Strings in java script
//Creating a string
let str="Hello!";//Using double quotes
let str1='Hello';//Using single quotes

//Template Literals(using backticks) it allows multiline string and string interpolation
let nam="shriya"
let str3=`hello ${nam}!`
console.log(str3);

let multiline=`This is a 
multiline string`
console.log(multiline);

//String properties
//string.length returns the number of charecters in the string
let str4="Helloworld"
let len=str4.length;
console.log(len);

//charAt(index) return the charecter at the particular index
str4.charAt(3)//prints l

//string concat merges or concats two strings
let concated=str1.concat(nam);
console.log(concated);//Hello shriya

//includes(substring) checks if the string contains specified substringa 
//and returns a boolean valu
console.log(str4.includes("world"));//true

//indexOf(substr) return the first occuranceof substring returns -1 if not found
console.log(str4.indexOf("world"));//returns 5






