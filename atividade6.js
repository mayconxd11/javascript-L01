//2 pontos p1(z1,y1) e p2(z1,y2)
//d = \|(x2-x1)² + (y2-y1)²
//mostra o 0

const prompt = require ('prompt-sync')();

const x1Text = prompt ('digite o Valor de x1');
const x2Text = prompt ('digite o Valor de x2');
const y1Text = prompt ('digite o Valor de y1');
const y2Text = prompt ('digite o Valor de y2');

const x1 = Number (x1Text);
const x2 = Number (x2Text);
const y1 = Number (y1Text);
const y2 = Number (y2Text);

const D = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow ((y2 - y1),2));

console.log (`distância dos pontos p1(${x1}, ${y1}) e p2 (${x2}, ${y2}), é de:${D}`);

