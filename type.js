"use strict";
/**
 * Curso: https://www.youtube.com/playlist?list=PL4iwH9RF8xHlxBrCZImFELtiew3TneihE
 */
exports.__esModule = true;
var Default = /** @class */ (function () {
    function Default() {
        this.texto = '';
    }
    Default.prototype.getTexto = function () {
        return this.texto;
    };
    Default.prototype.setTexto = function (texto) {
        this.texto = texto;
    };
    return Default;
}());
var teste = new Default();
teste.setTexto('Kevenn');
//console.log(teste.getTexto());
/**************************************************************************************** */
var tupla = [
    ['Kevenn', 22],
    ['Maria', 33]
];
function printTupla() {
    tupla.forEach(function (e) {
        console.log(e[0]);
    });
}
printTupla();
var Naipes;
(function (Naipes) {
    Naipes[Naipes["Paus"] = 0] = "Paus";
    Naipes[Naipes["Ouros"] = 1] = "Ouros";
    Naipes[Naipes["Espadas"] = 2] = "Espadas";
    Naipes[Naipes["Diamantes"] = 3] = "Diamantes";
})(Naipes || (Naipes = {}));
console.log(Naipes.Ouros);
/***************************************************************************************** */
/**
 * Objetos
 */
var obj = {
    name: 'Kevenn',
    age: 25
};
var obj2 = {
    name: 'Kevenn',
    age: 22
};
console.log("OBJ 2 name = " + obj2.name);
var usuario = {
    name: 'Kevenn',
    age: 22,
    teste: function () {
        return this.name;
    }
};
/***************************************************************************************** */
var text = 'teste';
