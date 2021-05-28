//
// Object Destructuring
//

// const person = {
//   name: 'Lee',
//   age: '24',
//   location: {
//     city: 'Maidstone',
//     temp: 13
//   }
// };

// // name = 'Anon' sets up default value if name doesn't exist
// const {name = 'Anon', age} = person;
// //above is the same as below
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// //renaming object names as different variable
// const {city, temp: temperature} = person.location;
// if (city && temperature) { 
//   console.log(`It's ${temperature} in ${city}.`);
// }

// //Test section.
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'}  = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['4 Winch Close', 'Maidstone', 'Kent', 'ME173FY'];

const [street, city, county = 'London', postCode] = address;
// const [, city, county] = address; will just get city and county
// can leave off values from the array but need to have a comma to skip
// last entry can just be removed.

console.log(`You're in ${city} ${county}.`);

//
//TEST
//
const item = ['Coffee (Iced)', '£3', '£3.50', '£4'];
const [itemName, , medium] = item;
console.log(`A Medium ${itemName} costs ${medium}.`);