function BubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
}
let arr=[-1,4,2,3,-5,6];
console.log("Array before sorting"+arr);
BubbleSort(arr);
console.log("Array after sorting"+arr);

