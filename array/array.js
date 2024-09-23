//Example 1 marks array
var marks = [97,82,75,64,36];
//console.log(marks);
typeof marks

let heroes = ["ironman","thor","hulk","spiderman"];
console.log(heroes);
console.log(marks[0]);
console.log(heroes[0]);
marks[0]=10;
//console.log(marks);//array is mutable in java script 
//where as strings are immutable in java script
for(let i=0;i<heroes.length;i++)
{
    console.log(heroes);

}
//Example 2 cities array
let cities=["Mumbai","Pune","Hyderabd","Chennai"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}
//Example 3 calculate the average of marks array

let Marks=[98,89,83,53,65];
var sum=0;
for(let mark of Marks)
{
    sum+=mark;
}
console.log(`The average marks is :${sum}`);


let items=[250,340,400,450];
let i=0;
for(let val of items)
{
    console.log(`value at index ${i}=${val}`);
    let offer=val /10;
    items[i] =items[i] -offer;
    console.log(`value after offfer=${val}`);
    i++;
}
//Array methods in java script
//Push():add to end
//pop():delete from end and return
//toString()

let foodItems = ["potato","apple","lichi","tomato"];
foodItems.push("chips","burger","paneer");
console.log(foodItems);
let deleteditm=foodItems.pop();
console.log("Deleted",deleteditm);