const prices: (number | string)[] = [1,3,2,2,2, 'as'];
prices.push(1);
prices.push('1');

//Posicion de un elemento
let user: [string, number, boolean];
user = ['nicobytes', 15, true];
// user = ['12', 15]; nos da error por posiciones
// user = [];
// user = ['nico'];
// user = ['nico', 12];
// user = ['nico', 12, true];
//destructuracion de datos en una variable de la tupla
const [username, age] = user;
console.log(username);
console.log(age);
