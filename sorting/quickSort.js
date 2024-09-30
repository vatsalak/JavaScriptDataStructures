// Function to perform the partition
function partition(arr, low, high) {
    let pivot = arr[high]; // Pivot element
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of smaller element
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }
    // Swap the pivot element with the element at i+1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// The main function to implement Quick Sort
function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the partition index
        let pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1); // Sort left part
        quickSort(arr, pi + 1, high); // Sort right part
    }
}

// Example usage:
let arr = [10, 80, 30, 90, 40, 50, 70];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
