const city = {
    city: 'Moscow',
    adress: {
        street: 'Ulitsa Lenina',
        homeNumber: 25
    }
}

const city2 = JSON.parse(JSON.stringify(city))

city2.adress.street = 'zvezdnyj bulvar'

console.log(city)
console.log(city2)
