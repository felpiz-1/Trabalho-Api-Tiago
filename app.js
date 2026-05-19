let pokemon = "charmander"

async function consultarCep(pokemon) {
    const url = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
    console.log(url)
}
consultarCep(pokemon);