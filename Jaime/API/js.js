/*
const apiUrl = 'https://swapi.co/api/planets'


async function llamadaApi(){
    let planets = await fetch(apiUrl)
    planets = await planets.json()
    console.log(planets.results) // 0 a 9 name y population
    representar(planets.results)
}

llamadaApi()

const pintame = document.getElementById('pintame')

function representar(planetList){
    planetList.forEach(planet => { // function(planet) se puede sustituir por planet =>
        pintame.innerHTML += `<b>${planet.name}</b> population: ${planet.population} <br>`
    });
}
*/

const apiUrl = 'http://api.icndb.com/jokes/random/5'


async function llamadaApi(){
    let frasesChuck = await fetch(apiUrl)
    frasesChuck = await frasesChuck.json()
    console.log(frasesChuck.value)
    representar(frasesChuck.value)
}

llamadaApi()

const chuckNorris = document.getElementById('chuckNorris')

function representar(frasesList){
    frasesList.forEach(frases => {
        chuckNorris.innerHTML += `<b style="color: #34495e">Chuck Norris says: </b>${frases.joke}<br>`
    });
}