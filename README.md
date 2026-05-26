# 🌐 Pokédex Dinâmica com PokéAPI

Esse é um site interativo e responsivo que consome a API pública **PokéAPI** para buscar e exibir informações detalhadas sobre Pokémon em tempo real.

---
## Authors

- [@felpiz-1](https://github.com/felpiz-1)
---

## ✨ Funcionalidades Principais

* **Busca Inteligente:** Pesquisa por nome do Pokémon ou número do ID.
* **Sanitização de Input (RegEx):** Sistema blindado contra espaços em branco e caracteres especiais digitados acidentalmente pelo usuário.
* **Navegação em Loop (Carrossel):** Botões "Próximo" e "Anterior", permitindo navegar entre o ID 1 e o ID 1025 de forma infinita.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Estruturação semântica e barras de progresso)
* **CSS3** (Estilização responsiva)
* **JavaScript**
    * Consumo de API com `Async/Await` e `Fetch API`
    * Tratamento de exceções com `try...catch`
* **API Externa:** [PokéAPI](https://pokeapi.co/)