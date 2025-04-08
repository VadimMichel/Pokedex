function getPokemonCardTemplate(indexpokemonArray){
    return `
        <div class="pokemon-container ${pokemonArray[indexpokemonArray].types[0].type.name}">
            <div class="pokemon-container-header-footer">
                <span>#${indexpokemonArray +1}</span><span>${pokemonArray[indexpokemonArray].name}</span>
            </div>
            <div class="img-wraper"><img src="${pokemonArray[indexpokemonArray].sprites.front_default}" alt="pokemon ${pokemonArray[indexpokemonArray].name}"></div>
            <div id="pokemonContainerFooter${indexpokemonArray}" class="pokemon-container-footer">
            </div>
        </div>
    `
}

function getPokemonTypeTemplate(indexpokemonArray, indexPokemonContainerFooter){
    let pokemonType = pokemonArray[indexpokemonArray].types[indexPokemonContainerFooter].type.name;
    return `
        <img src="${getPokemonTypeImage(pokemonType)}" alt="">
    `
}

function getPokemonTypeImage(image){
    if(image == "normal"){
        return pokemonTypeImageArray[0]
    }else if(image == "fighting"){
        return pokemonTypeImageArray[1]
    }else if(image == "flying"){
        return pokemonTypeImageArray[2]
    }else if(image == "poison"){
        return pokemonTypeImageArray[3]
    }else if(image == "ground"){
        return pokemonTypeImageArray[4]
    }else if(image == "rock"){
        return pokemonTypeImageArray[5]
    }else if(image == "bug"){
        return pokemonTypeImageArray[6]
    }else if(image == "ghost"){
        return pokemonTypeImageArray[7]
    }else if(image == "steel"){
        return pokemonTypeImageArray[8]
    }else if(image == "fire"){
        return pokemonTypeImageArray[9]
    }else if(image == "water"){
        return pokemonTypeImageArray[10]
    }else if(image == "grass"){
        return pokemonTypeImageArray[11]
    }else if(image == "electric"){
        return pokemonTypeImageArray[12]
    }else if(image == "psychic"){
        return pokemonTypeImageArray[13]
    }else if(image == "ice"){
        return pokemonTypeImageArray[14]
    }else if(image == "dragon"){
        return pokemonTypeImageArray[15]
    }else if(image == "dark"){
        return pokemonTypeImageArray[16]
    }else if(image == "fairy"){
        return pokemonTypeImageArray[17]
    }
}