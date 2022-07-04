export function getInsertionSortAnimations(array){
    const animations = [];
    insertionSort( array, array.length, animations);
    return animations;

}
function insertionSort(arr, n, animations) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        
        while (j >= 0 && arr[j] > key)
        { 
            animations.push([j+1, arr[j]]);
            animations.push([0, i, j]);
            animations.push([1, i, j]);
            
            arr[j + 1] = arr[j]; 
            j = j - 1; 

            
        } 
        animations.push([j+1, key]);
        arr[j + 1] = key; 
    } 
} 