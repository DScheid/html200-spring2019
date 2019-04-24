let pets = ["dog", "cat", "parrot", "rat", "turtle"];
let counter = 1;

pets.forEach(function(animal) {
  console.log(counter + "," + animal);
  counter++;
})
