// 
// Object Destructuring
// 

// const person = {
//   age: 28,
//   location: {
//     city: 'Khon Kaen',
//     temp: 81
//   }
// };

// const { name: firstname = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// 
// Array destructuring
// 

const address = ['1299 S Juniper Street', 'Khon Kaen', 'Thailand', '200000'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)