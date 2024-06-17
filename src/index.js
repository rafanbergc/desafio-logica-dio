let nome = "Rafael"
let xp = 2001
let nivel = []

const niveis = {
    ferro: "Ferro",
    bronze: "Bronze",
    prata: "Prata",
    ouro: "Ouro",
    platina: "Platina",
    ascendente: "Ascendente",
    imortal: "Imortal",
    radiante: "Radiante"
}


if (xp <= 1000) {
    nivel = niveis.ferro
} else if (xp >= 1001 && xp <= 2000) {
    nivel = niveis.bronze
} else if (xp >= 2001 && xp <= 5000) {
    nivel = niveis.prata
} else if (xp >= 5001 && xp <= 7000) {
    nivel = niveis.ouro
} else if (xp >= 7001 && xp <= 8000) {
    nivel = niveis.platina
} else if (xp >= 8001 && xp <= 9000) {
    nivel = niveis.ascendente
} else if (xp >= 9001 && xp <= 10000) {
    nivel = niveis.imortal
} else if (xp >= 10001) {
    nivel = niveis.radiante
}

console.log("O Herói: " + nome + ", está no nível: " + nivel + ".") 
