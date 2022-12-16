let randomArray = ["Hello", "there", "students", "of", "SEDC", "!"];

function printArray (randomArray) {
 //console.log(`${randomArray[0]}` + " " + `${randomArray[1]}` + " " + `${randomArray[2]}`+ " " + `${randomArray[3]}` + " " + `${randomArray[4]}`+ `${randomArray[5]}` );
 let counter = 0;
 var sentence = [];
 while(counter < randomArray.length){
  sentence += `${randomArray[counter]}`+ " ";
  counter++;
 }
 console.log(sentence);
}
printArray(randomArray)
