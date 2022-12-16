let arr = [ 3,5,6,8,11];
function minMax(ar) {
let counter = 0;
let min = arr[0];
let max = arr[0];
while (counter < arr.length) {
  if (arr[counter] > max) {
    max = arr[counter]
  }
  if (arr[counter] < min) {
    min = arr[counter]
  }
  counter++
}
  console.log(max);
  console.log(min);
  console.log(max + min);
}

minMax(arr)