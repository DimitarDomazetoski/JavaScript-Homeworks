let a = parseInt(prompt("Enter the year to see your Chinese Zodiac sign:"));
let b = (a-4)%12;

switch (b){
  case 0:
    alert("Rat")
    console.log("Rat");
    break;
  case 1:
    alert("Ox");
    console.log("Ox");
    break;
  case 2:
    alert("Tiger");
    console.log("Tiger");
    break;
  case 3:
    alert("Rabbit");
    console.log("Rabbit");
    break;
  case 4:
    alert("Dragon");
    console.log("Dragon");
    break;
  case 5:
    alert("Snake");
    console.log("Snake");
    break;
  case 6:
    alert("Horse");
    console.log("Horse");
    break;
  case 7:
    alert("Goat");
    console.log("Goat");
    break;
  case 8:
    alert("Monkey");
    console.log("Monkey");
    break;
  case 9:
    alert("Rooster")
    console.log("Rooster")
    break;
  case 10:
    alert("Dog");
    console.log("Dog");
    break;
  case 11:
    alert("Pig");
    console.log("Pig")
    break;
  default:
      alert("You can write only years")
}