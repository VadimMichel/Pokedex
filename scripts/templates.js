function getPokemonCardTemplate(indexpokemonArray){
    return `
        <div class="pokemon-container">
            <div class="pokemon-container-header-footer">
                <span>#${indexpokemonArray +1}</span><span>${pokemonArray[indexpokemonArray].name}</span>
            </div>
            <img src="${pokemonArray[indexpokemonArray].sprites.front_default}" alt="pokemon ${pokemonArray[indexpokemonArray].name}">
            <div class="pokemon-container-header-footer">
                <img src="" alt="type">
            </div>
        </div>
    `
}