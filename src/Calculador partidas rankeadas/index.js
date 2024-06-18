rankedCalculationMatches("Felipão the knowledge wizard", 20, 1)

function rankedCalculationMatches(nome, wins, loses) {
    const rank = {
        ferro: "Ferro",
        bronze: "Bronze",
        prata: "Prata",
        ouro: "Ouro",
        diamante: "Diamante",
        lendario: "Lendário",
        imortal: "Imortal",
    }
    let winLoss = wins - loses;

    let rankWL;
    switch (true) {
        case winLoss <= 10:
            rankWL = rank.ferro;
            break;
        case winLoss <= 20:
            rankWL = rank.bronze;
            break;
        case winLoss <= 50:
            rankWL = rank.prata;
            break;
        case winLoss <= 80:
            rankWL = rank.ouro;
            break;
        case winLoss <= 90:
            rankWL = rank.diamante;
            break;
        case winLoss <= 100:
            rankWL = rank.lendario;
            break;
        case winLoss >= 101:
            rankWL = rank.imortal;
            break;
    }
    console.log(`O Herói: ${nome}, tem o saldo de ${winLoss} vitórias, e está no nível: ${rankWL}`)
}