const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for (let iUser = 0; iUser < usuarios.length; iUser++) {
    console.log(`${usuarios[iUser].nome} works with ${usuarios[iUser].tecnologias[0]}, ${usuarios[iUser].tecnologias[1]}`)
}

// -----------------------------------------------------------

function searchCSS(user) {
    let usesCSS = false;
    for (let iTec = 0; iTec < user.tecnologias.length; iTec++) {
        if (user.tecnologias[iTec] == 'CSS') {
            usesCSS = true;
        }
    }
    return usesCSS
}

for (let iUser = 0; iUser < usuarios.length; iUser++) {
    const usesCSS = searchCSS(usuarios[iUser])

    if (usesCSS) {
        console.log(`The user ${usuarios[iUser].nome} works with CSS`)
    }
}

// -----------------------------------------------------------

const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function sumOfNumbers(numbers) {
    let sum = 0;
    for (let iNumber = 0; iNumber < numbers.length; iNumber++) {
        sum += numbers[iNumber];
    }

    return sum
}

function getBalance(deposits, withdraws) {
    return sumOfNumbers(deposits) - sumOfNumbers(withdraws)
}

for (let iUser = 0; iUser < usuarios2.length; iUser++) {

    const balance = getBalance(usuarios2[iUser].receitas, usuarios2[iUser].despesas);

    let balanceString = '';

    if (balance < 0) {
        balanceString = 'NEGATIVE'
    } else {
        balanceString = 'POSITIVE'
    }

    console.log(`${usuarios2[iUser].nome} have a ${balanceString} balance of  ${balance.toFixed(2)}`)
}