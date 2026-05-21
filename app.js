// let pokemon = "ditto"

// async function consultarPokemom(pokemon) {
//     const url = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json()
//     // console.log(url)
// }
// // consultarPokemom(pokemon);

let pokemonId = "1"

async function consultarPokemonId(pokemonId) {
    const urlId = await(await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)).json();
    
    filtrarDadosPokemom(urlId);
    // console.log(urlId);

}

function filtrarDadosPokemom(pokemon){
    const elemento = {  
        id: pokemon.id,
        nome: pokemon.name,
        altura: pokemon.height/10,
        peso: pokemon.weight/10,
        img: pokemon.sprites.front_default,
    };
    console.log(elemento)
}

consultarPokemonId(pokemonId);