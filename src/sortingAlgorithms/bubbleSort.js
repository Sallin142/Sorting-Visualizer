export function getBubbleSortAnimations(array){
    const animations = [];
    bubbleSort( array, array.length, animations);
    return animations;

}
function swap(arr, xp, yp)
{
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort( arr, n, animations){
    var i, j;
    for (i = 0; i < n-1; i++){
      for (j = 0; j < n-i-1; j++){
        animations.push([0, j, j+1]);
        animations.push([1, j, j+1]);
        
        if (arr[j] > arr[j+1]){
          animations.push([j, arr[j+1], j+1, arr[j]]);
          swap(arr,j,j+1);
        }else{
          animations.push([-1,-1,-1,-1]);//skip swap
        }
      }
    }
  }



