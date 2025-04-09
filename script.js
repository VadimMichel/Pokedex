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
        renderPokemonTypeInCardFooter(indexpokemonArray, "pokemonContainerFooter");
    }
}

async function renderPokemonTypeInCardFooter(indexpokemonArray, id){
    let pokemonCardFooter = document.getElementById(`${id}${indexpokemonArray}`);
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
    renderPokemonTypeInCardFooter(indexpokemonArray, "overlayPokemonContainerFooter");
    renderOverlayPokemonCardBaseStatst(indexpokemonArray);
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

function renderOverlayPokemonCardBaseStatst(indexpokemonArray){
    let pokemonCardDetailContentRef = document.getElementById(`overlayPokemonDetailContent${indexpokemonArray}`)
    pokemonCardDetailContentRef.innerHTML = "";
    let array = pokemonArray[indexpokemonArray].stats;

    
    for (let indexoverlayPokemonCardBaseStatst = 0; indexoverlayPokemonCardBaseStatst < array.length; indexoverlayPokemonCardBaseStatst++) {
        pokemonCardDetailContentRef.innerHTML +=`
            <tr>
                <td>${firstLatterUpperCase(pokemonArray[indexpokemonArray].stats[indexoverlayPokemonCardBaseStatst].stat.name)} :</td><td>${pokemonArray[indexpokemonArray].stats[indexoverlayPokemonCardBaseStatst].base_stat}</td>
            </tr>
            `
    }
    
}

function renderOverlayPokemonCardAbility(indexpokemonArray){
    let pokemonCardDetailContentRef = document.getElementById(`overlayPokemonDetailContent${indexpokemonArray}`);
    pokemonCardDetailContentRef.innerHTML = "";

    for (let indexoverlayPokemonCardAbility = 0; indexoverlayPokemonCardAbility < pokemonArray[indexpokemonArray].abilities.length; indexoverlayPokemonCardAbility++) {
        pokemonCardDetailContentRef.innerHTML += `
            <tr><td>${pokemonArray[indexpokemonArray].abilities[indexoverlayPokemonCardAbility].ability.name}</td></tr>
        `
    }
}