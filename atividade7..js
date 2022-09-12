const prompt = require ('prompt-sync')();

const aText = prompt ('Digite o valor de A');
const bText = prompt ('Digite o valor de B');
const cText = prompt ('Digite o valor de C');
const dText = prompt ('Digite o valor de D');
const eText = prompt ('Digite o valor de E');
const fText = prompt ('Digite o valor de F');

const a = Number (aText);
const b = Number (bText);
const c = Number (cText);
const d = Number (dText);
const e = Number (eText);
const f = Number (fText);

const x = (c*e) -  (b*f) / (a*e) -(b*d);
const y = (a*f) -  (c*d) / (a*e) -(b*d);

console.log (`O valor de x será ${x}, e o valor de y ${y}`);

