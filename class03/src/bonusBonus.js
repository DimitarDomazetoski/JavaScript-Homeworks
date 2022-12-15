function calculateAge (){
  let choose = parseInt(prompt("1) Convert dog year to human \n2) Convert human year to dog year"));
if (choose == 1) {
  let dogage = parseInt(prompt("Write your dog ages"));
  console.log(`Your human years compared to dog years is:  ${dogage / 7}`);
} else if (choose == 2) {
  let humanAge = parseInt(prompt("Write your age"));
  console.log(`Your dog have ${humanAge*7} years`); 
} else {
  alert("Your input is wrong , choose between 1) or 2)")
}

}
calculateAge()


