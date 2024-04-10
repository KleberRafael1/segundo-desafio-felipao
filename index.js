/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador 
depois disso retorne o resultado para uma variável. O saldo de Rankeadas deve ser 
feito através do calculo (vitórias - derrotas) */

function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    if (saldo >= 101) {
        nivel = "Imortal";
    } else if (saldo >= 91) {
        nivel = "Diamante";
    } else if (saldo >= 81) {
        nivel = "Ouro";
    } else if (saldo >= 51) {
        nivel = "Prata";
    } else if (saldo >= 21) {
        nivel = "Bronze";
    } else if (saldo >= 10) {
        nivel = "Ferro";
    } else {
        nivel = "Não Classificado";
    }

    return { saldo, nivel };
}

let vitorias = 110;
let derrotas = 10;

/*Ao final deve se exibir uma mensagem:
"O Herói tem saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

let { saldo, nivel } = calcularNivel(vitorias, derrotas);
console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);

