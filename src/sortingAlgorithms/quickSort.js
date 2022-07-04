export function getQuickSortAnimations(array){
    const animations = [];
    quickSort( array, 0, array.length-1, animations);
    return animations;

}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high, animations) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            animations.push([0, i, j]);
            animations.push([1, i, j]);
            animations.push([j, arr[i], i, arr[j]]);
            
            swap(arr, i, j);
        }else{
            animations.push([-1, -1, -1, -1]);
        }
    }
    animations.push([high, arr[i+1], i+1, arr[high]]);
    swap(arr, i + 1, high);
    return (i + 1);
}
function quickSort(arr, low, high, animations) {
    if (low < high) {
        let pi = partition(arr, low, high,animations);
        quickSort(arr, low, pi - 1,animations);
        quickSort(arr, pi + 1, high,animations);
    }
}