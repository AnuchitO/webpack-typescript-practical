export function greeting(name: string) :string {
  return name;
}

export class Contact {
  name:string

  constructor(name:string){
    this.name = name;
  }

  getAddress() :string {
    return "231 moo 9 bangkok";
  }

  getName() :string {
    return this.name;
  }

}

export interface Contacter{
  name:string

  getName:()=>string;
  getAddress:()=>string;
}
