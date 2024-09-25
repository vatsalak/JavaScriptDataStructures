//Here are examples of various space complexities in JavaScript, explained with sample code. 
//Space complexity refers to the amount of memory an algorithm uses relative to the input size.

//1. Constant Space - O(1)
//An algorithm is said to have constant space complexity if it uses a fixed amount of memory, 
//regardless of the input size.


function sumArray(arr) {
    let sum = 0;  // O(1) - Uses a fixed amount of space
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arrays = [1, 2, 3, 4];
console.log(sumArray(arrays));  // 10
//Explanation: The space required is constant because no matter the size of the input array,
// only one variable (sum) is used to store the result.

//2. Linear Space - O(n)
//An algorithm has linear space complexity if the amount of memory it uses grows proportionally to the input size.


function doubleArray(arr) {
    let result = [];  // O(n) - The size of the result array grows with input
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

let array1 = [1, 2, 3, 4];
console.log(doubleArray(array1));  // [2, 4, 6, 8]
//Explanation: The function creates a new array (result) that stores the doubled values, so the space usage is proportional to the input size.

//3. Quadratic Space - O(n²)
//If an algorithm uses memory proportional to the square of the input size,
// it has quadratic space complexity. This usually happens when we create a 2D array or matrix.

function createMatrix(n) {
    let matrix = new Array(n);  // O(n²) - Creating a 2D array

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);  // O(n)
    }

    return matrix;
}

console.log(createMatrix(3));
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ]
//Explanation: The algorithm creates a 2D array (matrix) where the size is n x n, so the space complexity is O(n²).

//4. Logarithmic Space - O(log n)
//Logarithmic space complexity often occurs in recursive algorithms where the depth 
//of the recursion stack is proportional to log n.

//Example: Binary Search

function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);  // O(log n) - Recursion depth
    } else {
        return binarySearch(arr, target, low, mid - 1);   // O(log n)
    }
}

let array3 = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(array3, 5, 0, array3.length - 1));  // 4
//Explanation: The space complexity is O(log n) because at most log n stack frames are created for the recursive calls.

//5. Exponential Space - O(2ⁿ)
//Algorithms that solve problems using recursion, and where each recursive call 
//branches into multiple calls, can have exponential space complexity due to the 
//recursion stack and additional storage requirements.

//Example: Recursive Fibonacci (O(2ⁿ) Space Complexity)

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);  // O(2^n) - Recursion creates many branches
}

console.log(fibonacci(5));  // 5
//Explanation: The recursive Fibonacci function grows exponentially, and space is used to store the results of all intermediate recursive calls. This leads to exponential space complexity.

//6. Linearithmic Space - O(n log n)
//Some algorithms have space complexity of O(n log n), which is often seen in 
//algorithms like merge sort, which splits the array recursively and uses extra space for the merged arrays.

//Example: Merge Sort (O(n log n) Space Complexity)

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));    // O(log n) recursive calls
    const right = mergeSort(arr.slice(mid));      // O(log n)

    return merge(left, right);   // O(n) space for merging
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));  // Merging takes O(n)
}

let array = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array));  // [3, 9, 10, 27, 38, 43, 82]
// Explanation: Merge sort recursively divides the array and requires additional space to store the merged subarrays. This results in O(n log n) space complexity.
// Summary of Common Space Complexities:
// O(1): Constant space (no extra memory based on input size).
// O(n): Linear space (memory usage grows directly with input size).
// O(n²): Quadratic space (creating a 2D array or matrix).
// O(log n): Logarithmic space (recursion depth in divide-and-conquer algorithms).
// O(2ⁿ): Exponential space (recursive algorithms with multiple branches).
// O(n log n): Linearithmic space (merge sort, where memory grows with recursion and merging steps).





