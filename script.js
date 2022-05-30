'use strict';

// const line = Symbol('line');

const user = {
    4: 'Four',
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};

console.log(Object.keys(user));
console.log(typeof (Object.keys(user))[0]);