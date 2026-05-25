const elementoBusca = {
    form: document.getElementById('formPesquisa'),
    input: document.getElementById('inputPesquisa'),
}

elementoBusca.form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeIdDigitado(elementoBusca.input.value);
})

function nomeIdDigitado(valorDigitado){
    let valorLimpo = valorDigitado
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9-]/g, '')
    consultarPokemonId(valorLimpo)
}


let idAtual = 0

async function consultarPokemonId(pokemonId) {
    const urlId = await(await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)).json();
    filtrarDadosPokemom(urlId);
    idAtual = urlId.id;
}

function filtrarDadosPokemom(pokemon){
    const elemento = {  
    
    /* caracteristicas base */
        id: pokemon.id,
        nome: pokemon.name,
        altura: pokemon.height/10,
        peso: pokemon.weight/10,
        imagem: pokemon.sprites.other['official-artwork'].front_default,
    
    /* Atributos do Pokemon */
    }
    inserirDados(elemento)
};

function inserirDados(dados){

let img = document.querySelector("img")
let nome = document.getElementById("pokemonNome")
let altura = document.getElementById("pokemonAltura")
let peso= document.getElementById("pokemonPeso")

img.src = dados.imagem;
nome.textContent = `  ${dados.nome.charAt(0).toUpperCase() + dados.nome.slice(1)}`;
altura.textContent = dados.altura;
peso.textContent = dados.peso;
}

const btnProximo = document.getElementById("btnProximo")
const btnAnterior = document.getElementById("btnAnterior")

    btnAnterior.addEventListener('click', (event) => {
        idAtual --;
        if(idAtual <= 0){
            idAtual = 1025
        }
    consultarPokemonId(idAtual)
    })

    btnProximo.addEventListener('click', (event) => {
        idAtual ++;
        if(idAtual == 1026){
            idAtual = 1
        }
    consultarPokemonId(idAtual)
    })

