const prompt = require ('prompt-sync')()

const n1Text = prompt ('Digite o valor da primeira nota');
const n2Text = prompt ('Digite o valor da segunda nota');
const n3Text = prompt ('Digite o valor da terceira nota');

const n1 = Number (n1Text);
const n2 = Number (n2Text);
const n3 = Number (n3Text);

const mediaFinal= ((n1*2) + (n2*3) + (n3*5)) / 10;

console.log (`A Média Ponderada Será:${mediaFinal}`);

