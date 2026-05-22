const elementoBusca = {
    form: document.getElementById('formPesquisa'),
    input: document.getElementById('inputPesquisa'),
    btnPesquisa: document.getElementById('btnPesquisa'),
}


const idDigitado = {
    idDigitado: ("")
}


elementoBusca.form.addEventListener('submit', (event) => {
    event.preventDefault();
    getIdDigitado(elementoBusca.input.value)
})

function getIdDigitado(pokemonId){
    // idDigitado.input = pokemonId;
    consultarPokemonId(pokemonId)
}


// let pokemonId = "10"

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
        imagem: pokemon.sprites.front_default,
    };
    console.log(elemento)

    inserirDados(elemento)
}

function inserirDados(dados){

let img = document.querySelector("img")

img.src = dados.imagem;


}
