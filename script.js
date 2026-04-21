const anoAtual = new Date().getFullYear(); 
const direitosAutorais = document.querySelector('.direitos-autorais span'); 
direitosAutorais.innerHTML = `MarcioTec. ${anoAtual}`;

const horaAtual = new Date().getHours();
let mensagem = "";

if (horaAtual < 12) {
    mensagem = "Bom dia!";
} else if (horaAtual < 18) {
    mensagem = "Boa tarde!";
} else {
    mensagem = "Boa noite!";
}

console.log(`${mensagem} Bem-vindo ao portefólio do Márcio!`);