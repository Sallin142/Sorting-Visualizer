export function getSelectionSortAnimations(array){
    const animations = [];
    selectionSort( array, array.length, animations);
    return animations;
}
function swap(arr,xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
function selectionSort(arr,  n, animations){
    var i, j, min_idx;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++){
        // Find the minimum element in unsorted array
        min_idx = i;
        
        for (j = i + 1; j < n; j++){
            animations.push([0,i, j]);
            if (arr[j] < arr[min_idx]){
                min_idx = j;
            }
            animations.push([1,i, j]);
        }
        
        
          
  
        // Swap the found minimum element with the first element
        animations.push([min_idx, arr[i], i, arr[min_idx]]);
        swap(arr,min_idx, i);
    }
}