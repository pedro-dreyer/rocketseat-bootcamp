// IMC calculation 
const name = 'Pedro';
const weight = '77';
const height = 1.91;

const imc = weight  / (height * height);


if (imc>=30) {
    console.log(`${name}, you are overweight`)
} else {
    console.log(`${name}, you are not overweight`)
}

// Retirement evaluation

const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const retirment_age = idade + contribuicao;

if ((sexo == 'F' && retirment_age > 85 ) || (sexo == 'M' && retirment_age >= 95)) {
    console.log(`${nome}, you can retire!`)
} else {
    console.log(`${nome}, you cannot retire yet!`)
}
    

