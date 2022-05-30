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



const shops2 = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
];

const budget = [10, 20, 30];

const map2 = new Map();

shops2.forEach((shop, i) => map2.set(shop, budget[i]));

console.log(map2);