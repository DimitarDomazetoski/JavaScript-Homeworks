let array = [ 2,2,3,3,0,5];
let arr = [5,5,2,2,6,6,6,7];
let niza = [9,9,9,5,42,44,21,23,45]


function findNumber (array,number) {
  let counter = 0;
  for (let element of array) {
    if (element === number) {
      counter++
    } 
  }
    console.log(`There is ${counter} occurrences of ${number}  in the array.`);
}
findNumber(array,2);
findNumber(arr,6);
findNumber(niza,45);

