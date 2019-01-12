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
