

const serverResponse = {
    header: 'HTTP 1.1',
    body: 'Some data',
    code: '200'
};

const responseProxy = new Proxy(serverResponse, {
    get(target, prop) {
        target.proxied = true;
        return target[prop];
    },
    set(target, prop, value) {

        if(prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} for the target object`);
        }
    },
    has(target, prop) {
        return ['header', 'body', 'code', 'proxied'].includes(prop);
    },
    deleteProperty(target, prop) {
        delete target[prop];
    }
});

const logging = text => {

    const currentDate = new Date();
    const dateFormat = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDay()}`;
    const timeFormat = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    return `[${dateFormat} ${timeFormat}]: ${text}`;
}

const counter = (step) => {
    let count = 0;
    return () => {
         count += step;
        return count;
    }
};

const incrementer = counter(1);

const loggingProxy = new Proxy(logging, {

    apply(target, thisArg, args) {
        const response = target.apply(thisArg, args).toUpperCase();
        const updatedResponse = `[${incrementer()}]:${response}`;

        return updatedResponse;
    }
});


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printData() {
        console.log(`A name: ${this.name}, a job: ${this.age}`);
    }
};

const PersonProxy = new Proxy(Person, {

    construct(target, args) {

        const proxy = new target(...args);

        Object.keys(proxy)
             .forEach(key => {
                 proxy[key] = (typeof proxy[key]) === 'string'? `$Proxy$${proxy[key]}` : proxy[key];
             });
        console.log(proxy);

        return proxy;
    }
});

const proxyPerson = new PersonProxy('Alex', 25);


