const Address = require("./address");
const Person = require("./person");

const addr = new Address("Rua Projetada", 25, "Serra Grande", "Paraíba", "Nordeste", "Brasil");
const person1 = new Person("John Doe", addr);

console.log(person1.address.fullAddress());