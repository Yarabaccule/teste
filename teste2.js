let nickName = "Ana A Destruidora";
let xp = 11;

function nivel(xp) {
    let nivel;

    if (xp < 10) {
        nivel = "Ferro";
    } else if (xp < 20) {
        nivel = "Bronze";
    } else if (xp < 50) {
        nivel = "Prata";
    } else if (xp < 80) {
        nivel = "Ouro";
    } else if (xp < 90) {
        nivel = "Diamante";
    } else if (xp < 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

console.log(`O Herói de nome ${nickName} tem de saldo de ${xp} vitórias e está no nível ${nivel(xp)}`);

/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/