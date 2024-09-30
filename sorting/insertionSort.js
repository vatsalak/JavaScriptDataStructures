function insertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let NTI=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>NTI)
        {
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=NTI;
    }
    return arr
}
let arr=[2,4,3,1,0];
console.log("Array before sorting"+arr);
insertionSort(arr);
console.log("Array after sorting"+arr);