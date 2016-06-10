import {greeting, Contact, Contacter} from "./Hello"

console.log(greeting("Anuchit"));

let contact:Contacter = new Contact("Anuchit Prasertsang hachiNong");
console.log("contact:", contact.getAddress());
console.log("contact:name:", contact.getName());
