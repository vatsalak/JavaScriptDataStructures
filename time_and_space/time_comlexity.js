//1. Constant Time - O(1)
//An algorithm runs in constant time if its execution time does not depend on the input size. Accessing an element in an array by index is an example of O(1).



function getFirstElement(arr) {
    return arr[0];  // O(1) - Accessing first element takes constant time
}

let array = [10, 20, 30, 40];
console.log(getFirstElement(array));  // 10

//2. Linear Time - O(n)
//In linear time, the execution time increases directly in proportion to the input size. For example, looping through an array.


function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  // O(n) - Iterates through all elements
    }
}

let array1 = [10, 20, 30, 40];
printAllElements(array1);  // 10 20 30 40

//3. Quadratic Time - O(n²)
//When an algorithm contains nested loops, where both loops iterate 
//over the input, the time complexity is O(n²). Sorting algorithms like bubble sort have quadratic time complexity.

function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);  // O(n²) - Nested loop
        }
    }
}

let array2 = [1, 2, 3];
printPairs(array2);  // Prints all pairs (1,1), (1,2), (1,3), etc.

//4. Logarithmic Time - O(log n)
//Logarithmic time complexity is common when the problem size reduces by half
// in each iteration, such as in binary search.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;  // O(log n) - Dividing the array in half each time
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;  // Target not found
}

let array3 = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(array, 40));  // 3 (index of 40)

//5. Cubic Time - O(n³)
//When there are three nested loops, the time complexity is O(n³).

function printTriplets(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                console.log(arr[i], arr[j], arr[k]);  // O(n³)
            }
        }
    }
}

let array4 = [1, 2, 3];
printTriplets(array4);  // Prints all triplets

//6. Exponential Time - O(2ⁿ)
//An exponential time algorithm doubles with each additional input. Recursive algorithms for combinatorial problems (like the Fibonacci sequence) often have exponential time complexity.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // O(2^n)
}

console.log(fibonacci(5));  // 5 (0, 1, 1, 2, 3, 5)

//7. Logarithmic Linear Time - O(n log n)
//Algorithms like merge sort and quick sort have O(n log n) complexity because they divide the input and perform a linear operation on each division.

//Merge Sort (O(n log n)) Example:

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let array5 = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array5));  // [3, 9, 10, 27, 38, 43, 82]
// Summary of Common Time Complexities:
// O(1): Constant time (array access, basic operations).
// O(n): Linear time (single loop over input).
// O(n²): Quadratic time (nested loops).
// O(log n): Logarithmic time (binary search, divide and conquer).
// O(n log n): Log-linear time (efficient sorting algorithms).
// O(n³): Cubic time (three nested loops).
// O(2ⁿ): Exponential time (recursive combi