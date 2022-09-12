const prompt = require ('prompt-sync')()

const ageString = prompt ('Dia que nasceu?');
const age = Number(ageString);

const monthString = prompt ('mês que você nasceu?');
const month = Number(monthString);

const daysString = prompt ('Ano que você nasceu');
const days = Number(daysString);

const total = (( days * 365) + (month * 30 ) + age );

console.log (`\n Parabéns esse são seus dias vividos: ${total}`);

