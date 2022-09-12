const prompt = require ('prompt-sync')()

const Atext = prompt ('Digite o valor de a');
const Btext = prompt ('Digite o valor de b');
const Ctext = prompt ('digite o valor de c');

const a = Number(Atext);
const b = Number(Btext);
const c = Number(Ctext);

const r= Math.pow (a+b, 2);
const s= Math.pow (b+c, 2);

const d=(r+s)/2

console.log (`O resultado é: ${d} `);
