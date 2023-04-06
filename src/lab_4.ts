interface MyInterface {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}
interface MyExtendedInterface extends MyInterface {
    occupation: string;
    salary: number;
}

const person: MyExtendedInterface = {
    name: "Dorian Botosanu",
    age: 30,
    email: "dorian.botosanu@gmail.com",
    address: "Milano 9 J",
    phone: "069345678",
    occupation: "Inginer",
    salary: 15000
};

console.log(person.name);
console.log(person.age);
console.log(person.email);
console.log(person.address);
console.log(person.phone);
console.log(person.occupation);
console.log(person.salary + "$");
