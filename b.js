class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static compare(p1, p2) {
        if (p1.age > p2.age) return console.log(`${p1.name} > ${p2.name}`);
        console.log(`${p1.name} < ${p2.name}`);
    }
}

const pho = new Person('PHo', 18);
const khoa = new Person('Khoa', 30);

pho.height = 160;

// Person.compare(pho, khoa);
console.log(pho);

Person.compare2 = function (p1, p2) {
    if (p1.age > p2.age) return console.log(`${p1.name} > ${p2.name}`);
    console.log(`${p1.name} < ${p2.name}`);
}

Person.compare2(pho, khoa);
