const prompt = require ('prompt-sync')()

const totaldesegundoText = prompt ('Total de Segundos possuídos:');
const totaldesegundos = Number (totaldesegundoText);

const hora  = Math.floor (totaldesegundos/3600);
const minuto = Math.floor((totaldesegundos%3600)/60);
const segundo = Math.floor((totaldesegundos%3600)%60);

console.log (`O evento terá horas: ${hora} minutos, ${minuto} segundos, ${segundo}`);