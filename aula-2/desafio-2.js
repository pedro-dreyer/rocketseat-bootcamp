const company = {
    name: 'Rocketseat',
    collor: 'Purple',
    focus: 'programming',
    adress: {
        street: 'Guilherme Gembala',
        number: 260
    }
};

console.log(`the company ${company.name} is locatted on ${company.adress.street} street, number ${company.adress.number}`)

const employee = { 
    name: 'Carlos',
    age: 32,
    technology: [
        {name: 'C++', specialty: 'Descktop'},
        {name: 'Python', specialty: 'Data science'},
        {name: 'Jamascript', specialty: 'Web/Mobile'}
    ]
};

console.log(`The user ${employee.name}, has ${employee.age} years and uses ${employee.technology[0].name} with ${employee.technology[0].specialty} specialty`)
    

