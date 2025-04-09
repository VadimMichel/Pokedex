function init(){
    pushAPIDatainLocalArray();
}

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1');
            if(promError){
                reject();   
            }else{
                resolve();     
            }
        }, 100);     

    });
}

async function usePromiseNew() {
    try{   
        await getPromise();  
    } catch (error) {           
        console.log(error);
    }
}

async function fetchDataJson(url){
    let response = await fetch(url);
    let responseAsJson = await response.json();
    return responseAsJson
}

async function pushAPIDatainLocalArray(){
    
    for (let APIDataIndex = firstPokemon; APIDataIndex < lastPokemon; APIDataIndex++) {
        let data = await fetchDataJson(`https://pokeapi.co/api/v2/pokemon/${APIDataIndex}`);
        pokemonArray.push(data);
    }
    renderPokemonCard();
}

function renderPokemonCard(){
    let pokemonCardContant = document.getElementById("main-content");
    pokemonCardContant.innerHTML = "";

    for (let indexpokemonArray = 0; indexpokemonArray < pokemonArray.length; indexpokemonArray++) {
        pokemonCardContant.innerHTML += getPokemonCardTemplate(indexpokemonArray);
        renderPokemonTypeInCardFooter(indexpokemonArray);
    }
}

async function renderPokemonTypeInCardFooter(indexpokemonArray){
    let pokemonCardFooter = document.getElementById(`pokemonContainerFooter${indexpokemonArray}`);
    pokemonCardFooter.innerHTML = "";

    for (let indexPokemonContainerFooter = 0; indexPokemonContainerFooter < pokemonArray[indexpokemonArray].types.length; indexPokemonContainerFooter++) {
        pokemonCardFooter.innerHTML += getPokemonTypeTemplate(indexpokemonArray, indexPokemonContainerFooter);
    }
}

function displayMorePokemon(){
    firstPokemon = firstPokemon +20;
    lastPokemon = lastPokemon +20;
    pushAPIDatainLocalArray()
}

function openOverlayCard(indexpokemonArray){
    let overlayRef = document.getElementById('overlay') 
    overlayRef.classList.remove("d_none");
    overlayRef.innerHTML = "";
    overlayRef.innerHTML = getOverlayPokemonCardTemplate(indexpokemonArray);
}

function closeWindow(){
    document.getElementById('overlay').classList.add("d_none");
}

function eventBubeling(event){
    event.stopPropagation();
}

function firstLatterUpperCase(string){
    capitalizedType = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return capitalizedType
}