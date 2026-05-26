const elementoBusca = {
    form: document.getElementById('formPesquisa'),
    input: document.getElementById('inputPesquisa'),
}

elementoBusca.form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeIdDigitado(elementoBusca.input.value);
    elementoBusca.input.value = ""
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
    try {
        const respostaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        if(respostaApi.status == 404 ){
            document.getElementById("pokemonIMG").src = "img/erroNaoEncontrado.jpeg"
            document.getElementById("pokemonNome").textContent = "-"
            document.getElementById("pokemonAltura").textContent = "-"
            document.getElementById("pokemonPeso").textContent = "-"
            document.getElementById("pokemonHabilidade").textContent = "-"
            document.getElementById("pokemonTipos").textContent = "-"
            document.getElementById("txtAtaque").textContent = "-"
            document.getElementById("txtDefesa").textContent = "-"
            return;
        }
        else if(respostaApi.status >= 500){
            document.getElementById("pokemonIMG").src = "img/erroDeServidor.jpeg"
            document.getElementById("pokemonNome").textContent = "-"
            document.getElementById("pokemonAltura").textContent = "-"
            document.getElementById("pokemonPeso").textContent = "-"
            document.getElementById("pokemonHabilidade").textContent = "-"
            document.getElementById("pokemonTipos").textContent = "-"
            document.getElementById("txtAtaque").textContent = "-"
            document.getElementById("txtDefesa").textContent = "-"
            return;
        }
        const urlId = await respostaApi.json();
        filtrarDadosPokemom(urlId);
        idAtual = urlId.id;
    } catch (error) {
        document.getElementById("pokemonIMG").src = "img/erroDeRede.jpeg"
        document.getElementById("pokemonNome").textContent = "-"
        document.getElementById("pokemonAltura").textContent = "-"
        document.getElementById("pokemonPeso").textContent = "-"
        document.getElementById("pokemonHabilidade").textContent = "-"
        document.getElementById("pokemonTipos").textContent = "-"
        document.getElementById("txtAtaque").textContent = "-"
        document.getElementById("txtDefesa").textContent = "-"
    }
}

function filtrarDadosPokemom(pokemon){
    const elemento = {  
        id: pokemon.id,
        nome: pokemon.name,
        altura: pokemon.height/10,
        peso: pokemon.weight/10,
        imagem: pokemon.sprites.other['official-artwork'].front_default,
        habilidades: pokemon.abilities.map(item => item.ability.name).join(', '),
        tipos: pokemon.types.map(item => item.type.name).join(', '),
        ataque: pokemon.stats[1].base_stat,
        defesa: pokemon.stats[2].base_stat
    
    
    }
    inserirDados(elemento)
};

function inserirDados(dados){

let img = document.getElementById("pokemonIMG")
let nome = document.getElementById("pokemonNome")
let altura = document.getElementById("pokemonAltura")
let peso= document.getElementById("pokemonPeso")
let habilidades = document.getElementById("pokemonHabilidade")
let tipos = document.getElementById("pokemonTipos")
let ataque = document.getElementById("txtAtaque")
let defesa = document.getElementById("txtDefesa")
let barraAtaque = document.getElementById("barraAtaque")
let barraDefesa = document.getElementById("barraDefesa")

img.src = dados.imagem;
nome.textContent = `  ${dados.nome.charAt(0).toUpperCase() + dados.nome.slice(1)}`;
altura.textContent = ` ${dados.altura} m`
peso.textContent = ` ${dados.peso} Kg`
habilidades.textContent = dados.habilidades;
tipos.textContent = dados.tipos;
ataque.textContent = dados.ataque;
defesa.textContent = dados.defesa;
barraAtaque.value = dados.ataque;
barraDefesa.value = dados.defesa;
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

