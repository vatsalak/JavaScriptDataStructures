//String is a sequence of characters used to represent a text
//Create string
let str ="Bridge Labz";
let str2='Vatsala';
console.log(str);
//inbuilt properties in strings
//1.string length return the length of the string
console.log(str.length);

//2.charAt(index) Returns the character at the specified index.

console.log(str.charAt(9));

charCodeAt(index)
//Returns the Unicode of the character at the specified index.
//javascript

let str1 = "Hello";
console.log(str1.charCodeAt(1)); // Output: 101
//4. concat(string1, string2, ...)
//Concatenates two or more strings and returns a new string.
//javascript

let str3 = "Hello";
let str4 = "World";
console.log(str3.concat(", ", str4, "!")); // Output: "Hello, World!"
//5. includes(substring)
//Checks if the string contains the specified substring. Returns true or false.

let str5 = "Hello, World!";
console.log(str5.includes("World")); // Output: true
//6. indexOf(substring, fromIndex)
//Returns the index of the first occurrence of the specified substring. Returns -1 if not found.

let str6 = "Hello, World!";
console.log(str6.indexOf("World")); // Output: 7
//7. lastIndexOf(substring, fromIndex)
//Returns the index of the last occurrence of the specified substring. Returns -1 if not found.

let str7 = "Hello, World! World!";
console.log(str7.lastIndexOf("World")); // Output: 14
//8. replace(searchValue, newValue)
//Replaces the first occurrence of a substring with a new substring.

let str8 = "Hello, World!";
console.log(str8.replace("World", "Universe")); // Output: "Hello, Universe!"
//9. replaceAll(searchValue, newValue)
//Replaces all occurrences of a substring with a new substring.
javascript

let str9 = "Hello, World! World!";
console.log(str9.replaceAll("World", "Universe")); // Output: "Hello, Universe! Universe!"
//10. slice(startIndex, endIndex)
//Extracts a section of a string and returns it as a new string, without modifying the original string.
//javascript

let strs = "Hello, World!";
console.log(strs.slice(0, 5)); // Output: "Hello"