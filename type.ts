/**
 * Curso: https://www.youtube.com/playlist?list=PL4iwH9RF8xHlxBrCZImFELtiew3TneihE
 */

class Default {
  texto: string;
  qualquer: any //o tipo 'any' significa que aceita qualquer tipo de valor
  numero: number;
  booleano: boolean;
  array: Array<any>;
  array2: any[];

  constructor() {
    this.texto = '';
  }

  getTexto(): string {
    return this.texto;
  }

  setTexto(texto: string) {
    this.texto = texto;
  }
}

const teste: Default = new Default()

teste.setTexto('Kevenn');

//console.log(teste.getTexto());

/**************************************************************************************** */

let tupla: [string, any] [] = [
  ['Kevenn', 22],
  ['Maria', 33]
];

function printTupla(): void {
  tupla.forEach(e => {
    console.log(e[0]);
  });
}

printTupla();

enum Naipes {
  Paus,
  Ouros,
  Espadas,
  Diamantes
}

console.log(Naipes.Ouros);

/***************************************************************************************** */

/**
 * Objetos
 */

 let obj: {name: string, age: number, active?: boolean} = {
   name: 'Kevenn',
   age: 25,
 }

 let obj2: {[key: string]: any} = {
   name: 'Kevenn',
   age: 22
 }

console.log(`OBJ 2 name = ${obj2.name}`);

/***************************************************************************************** */

/**
 * Interfaces
*/

export interface User {
  name: string;
  age: number;
  active?: boolean;
  teste(): string;
}

let usuario: User = {
  name: 'Kevenn',
  age: 22,

  teste(): string {
    return this.name;
  }
}

/***************************************************************************************** */

let text = 'teste';