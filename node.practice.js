var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

for (i = 0; i <= writers.length; i++) {
  
  if (typeof writers[i] === false) console.log ('I am dead');
  if (typeof writers[i] === true) console.log ("Hi");
  
  var first = writers[i].firstName;

console.log ("Hi, my name is " + first + " " + writers[i].lastName+ " and I am " + writers[i].age + " years old. I am a " + writers[i].occupation + ".");
}