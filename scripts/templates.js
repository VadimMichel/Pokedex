function getPokemonCardTemplate(indexpokemonArray){
    return `
        <div onclick="openOverlayCard(${indexpokemonArray})" class="pokemon-container ${pokemonArray[indexpokemonArray].types[0].type.name} cursor-pointer">
            <div class="pokemon-container-header-footer">
                <span>#${indexpokemonArray +1}</span><span>${firstLatterUpperCase(pokemonArray[indexpokemonArray].name)}</span>
            </div>
            <div class="img-wraper scale"><img src="${pokemonArray[indexpokemonArray].sprites.front_default}" alt="pokemon ${pokemonArray[indexpokemonArray].name}"></div>
            <div id="pokemonContainerFooter${indexpokemonArray}" class="pokemon-container-footer"></div>
        </div>
    `
}

function getPokemonTypeTemplate(indexpokemonArray, indexPokemonContainerFooter){
    let pokemonType = pokemonArray[indexpokemonArray].types[indexPokemonContainerFooter].type.name;
    return `
        <img src="${getPokemonTypeImage(pokemonType)}" alt="">
    `
}

function getOverlayPokemonCardTemplate(indexpokemonArray){
    return `
        <div onclick="eventBubeling(event)" id="overlay-pokemon-card" class="${pokemonArray[indexpokemonArray].types[0].type.name} overlay-pokemon-card-style ">
            <div class="w-100">
                <div class="pokemon-container-header-footer scale">
                    <span>#${indexpokemonArray +1}</span><span>${firstLatterUpperCase(pokemonArray[indexpokemonArray].name)}</span class="scale"><img onclick="closeWindow()" class="w-h-24 cursor-pointer" src="./assets/ico/circle-xmark-solid.svg" alt="circle-xmark-solid">
                </div>
                <div class="overllay-card-header">
                    <div id="overlayPokemonContainerFooter${indexpokemonArray}" class="pokemon-container-footer"></div>
                    <div class="img-wraper-overlay d-flex-center"><img class="z-i-2" src="${pokemonArray[indexpokemonArray].sprites.other.showdown.front_default}" alt="pokemon ${pokemonArray[indexpokemonArray].name}"></div>
                </div>
            </div>
            <div class="overlay-pokemon-detail m-30">
                <div class="overlay-pokemon-navbar-wrapper"><span onclick="renderOverlayPokemonCardBaseStatst(${indexpokemonArray})">Base Stats</span><span onclick="renderOverlayPokemonCardAbility(${indexpokemonArray})">Ability</span></div>
                <table class="pokemon-overlay-detail-style" id="overlayPokemonDetailContent${indexpokemonArray}"></table>
                <div class="overlay-card-fotter-wrapper scale"><img onclick="openOverlayCard(${indexpokemonArray -1})" class="w-h-24 " src="./assets/ico/square-caret-left-solid.svg" alt=""><img onclick="openOverlayCard(${indexpokemonArray +1})" class="w-h-24 scale" src="./assets/ico/square-caret-right-solid.svg" alt=""></div>
            </div>
        </div>
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