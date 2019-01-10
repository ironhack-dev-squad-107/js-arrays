var theUser = [
  "Hugh Jackman",
  "hugh@wolverine.com",
  "October 12, 1968",
  1.88,
  "05555555555",
  "555 Rue Australie"
];

console.log(theUser[0]);
console.log(theUser[3]);
console.log(theUser[4]);
console.log(theUser[1]);

// OBJECTS: group up information about the same subject
theUser = {
  // use "" only for keys with spaces and other weird characters
  "full name": "Hugh Jackman",
  email: "hugh@wolverine.com",
  birthday: "October 12, 1968",
  height: 1.88,
  phone: "05555555555",
  address: "555 Rue Australie"
};

// use [""] only for keys with spaces and other weird characters
console.log(theUser["full name"]);
console.log(theUser.height);
console.log(theUser.phone);
console.log(theUser.email);

// create new keys and values with = assignment
theUser.profilePicture = "http://example.com/avatar.jpg";
theUser.favoriteColor = "red";

// update values of existing keys with = assignment
theUser.address = "555 Wolverine St, Sydney, Australia";
theUser.email = "wolverine@example.com";

// remove keys & values with the "delete" keyword
delete theUser.phone;

console.log(theUser);

// returns an array of the KEYS inside the object as strings
console.log(Object.keys(theUser));
// [ 'full name', 'email', 'birthday', 'height',
//   'address', 'profilePicture', 'favoriteColor' ]

// returns an array of the VALUES inside the object
console.log(Object.values(theUser));
// [ 'Hugh Jackman', 'wolverine@example.com',
//   'October 12, 1968', 1.88,
//   '555 Wolverine St, Sydney, Australia',
//   'http://example.com/avatar.jpg', 'red' ]

var hughValues = Object.values(theUser);

console.log("Hugh object's VALUES:");

hughValues.forEach(function(oneItem) {
  // the * is just a bullet for displaying this list
  console.log("* " + oneItem);
});
