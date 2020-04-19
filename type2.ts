import { User } from './type';

export class Cadastro implements User {
  name: string;
  age: number;
  active?: boolean;

  constructor(name: string, age: number, active?:boolean) {
    this.name = name;
    this.age = age;
    this.active = active;
  }

  teste(): string {
    return this.name;
  }
}