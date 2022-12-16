let numbers = [10,1,3,12,15];

function validateNumber(numbers) {
  let counter = 0;
  while (counter < numbers.length) {
    if (isNaN(numbers[counter])) {
      alert ("WRONG INPUT")
      return false;
    } 
    counter++
  }
} 

function sum (numbers) {
   let counter = 0;
   let sum1 = 0;
   if( validateNumber(numbers) == false)
   return;
   while (counter < numbers.length) {
   sum1 = sum1 + numbers[counter]; // == sum1 += numbers[counter]
   counter ++;
   }
  console.log(sum1);
  
}
sum(numbers);