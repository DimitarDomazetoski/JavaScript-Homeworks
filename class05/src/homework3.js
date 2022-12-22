let array = [5,5,5,7,8,8,10]


function findNumber(array,type){
for (let num of array ){
  if (type === "even") {
     if (num%2 == 0){
      console.log(num)
    }
  }
  else if(type === "odd") {
    if (num%2 == 1) {
      console.log(num)
    }
  }
  else{
    console.log("Invalid type")
  }
}

}
console.log("Even numbers");
findNumber(array,"even");
console.log("Odd numbers");
findNumber(array,"odd")