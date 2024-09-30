// Function to merge two sorted arrays
function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Concatenating values into resultArray in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move right array cursor
        }
    }

    // We need to concat here because there will be one element left over
    // in one of the arrays
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

// Recursive function to divide and sort the array
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2); // Find the middle point
    const left = array.slice(0, middle); // Divide the array into two halves
    const right = array.slice(middle);

    // Recursively divide and sort both halves
    return merge(mergeSort(left), mergeSort(right));
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
const sortedArray = mergeSort(arr);
console.log("Sorted array:", sortedArray);
