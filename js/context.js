const arr = [1,2,3,4,5];

Array.prototype.mult = function (n = 1) {

    return this.map(el => {
        return el * n;
    })
}


const res = arr.mult(5);
console.log(res);


//=============================================================>

function urlGenerator(domain) {
    return (url) => {
        return `http://${url}.${domain}`;
    }
}


const comDomain = urlGenerator('com');
const ruDomen = urlGenerator('ru')

console.log(comDomain('google'));
console.log(ruDomen('yandex'));

//==============================================================>

function logPerson() {
    console.log(`Name: ${this.name} with age ${this.age} and job as a ${this.job}`);
}

const person1 = {
    name: 'Mihail',
    age: 22,
    job: 'Software engineer'
}

const person2 = {
    name: 'Alex',
    age: 33,
    job: 'CTO'
};

logPerson.bind(person1);

function bind(context, fn) {
    return function (...args) {
        return fn.apply(context, [args]);
    }
}

const bindFirst = bind(person1, logPerson);

bindFirst();


