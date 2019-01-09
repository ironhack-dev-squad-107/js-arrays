var studentNames = [
  "Christina",
  "Raja",
  "Thomas",
  "Kevin",
  "Celine",
  "Francesca",
  "Jules"
];

// splice REMOVES items from the array
studentNames.splice(3, 1);
// TWO arguments:
// a) the INDEX of the array to start removing
// b) the AMOUNT of items to remove

studentNames.push("Armand");
// unshift is like push but it adds to the START
studentNames.unshift("Bastien");

console.log(studentNames.length);
console.log(studentNames[5]);

var lastIndex = studentNames.length - 1;
console.log("LAST ITEM " + studentNames[lastIndex]);

for (var index = 0; index < studentNames.length; index += 1) {
  var oneName = studentNames[index];
  console.log(oneName.charAt(0) + ".");
}

// var oneName = studentNames[0];
// var oneName = studentNames[1];
// var oneName = studentNames[2];
// ...
studentNames.forEach(function(oneName) {
  console.log(oneName.charAt(0) + ".");
});
