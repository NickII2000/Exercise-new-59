'use strict';

// const line = Symbol('line');

// const user = {
//     4: 'Four',
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     },
// };

// console.log(Object.keys(user));
// console.log(typeof (Object.keys(user))[0]);

const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 },
    { milk: 60 },
    { water: 10 },
    { juce: 100 }
];

const map = new Map();

map.set(shops[0], 5000);
map.set(shops[1], 15000);
map.set(shops[2], 25000);

map.set(shops[3], 35000).
    set(shops[4], 45000).
    set(shops[5], 55000);

console.log(map);