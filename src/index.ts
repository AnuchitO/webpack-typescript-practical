import {greeting, Contact} from "./Hello"

console.log(greeting("Anuchit"));

let contact = new Contact("Anuchit Prasertsang");
console.log("contact:", contact.getAddress());
console.log("contact:name:", contact.getName());
