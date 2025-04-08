function getPokemonCardTemplate(indexpokemonArray){
    return `
        <div class="pokemon-container ${pokemonArray[indexpokemonArray].types[0].type.name}">
            <div class="pokemon-container-header-footer">
                <span>#${indexpokemonArray +1}</span><span>${pokemonArray[indexpokemonArray].name}</span>
            </div>
            <div class="img-wraper"><img src="${pokemonArray[indexpokemonArray].sprites.front_default}" alt="pokemon ${pokemonArray[indexpokemonArray].name}"></div>
            <div id="pokemonContainerFooter${indexpokemonArray}" class="pokemon-container-header-footer">
            </div>
        </div>
    `
}