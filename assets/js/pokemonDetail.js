
function convertPokemonDetail(pokemon) {
    return `<section id="pokemonDetail" class="contentDetail ${pokemon.type}">
                <div class="headerDT">
                    <div clas="nanuDT">
                        <span class="nameDT">${pokemon.name}</span>
                    </div>
                    <p>
                    <span class="numberDT">#${pokemon.number.toString().padStart(3, '0')}</span>
                    </p>
                </div>
                <div class="imageDT">
                    <img src="${pokemon.photo}">
                </div>
                <div class="infoDT">
                    <div class="moreDT">
                        <div class="weightDT">
                            <p class="p"> ${pokemon.weight} Kg</p>
                            <p class="pp"> Weight</p>
                        </div>
                        <div class"typesDT">
                            <p class="p">${pokemon.types.join(' | ')}</p>
                            <p class="pp"> Types</p>
                        </div>
                        <div class="heightDT">
                                <p class="p"> ${pokemon.height} m </p>
                                <p class="pp"> Height</p>
                        </div>
                    </div>
                    <p class="movesDT"> Moves </p>
                    <div class="moves">
                        ${pokemon.moves.map((move) => `<li ${move}>${move}</li>`).join('')}
                    </div>
                </div>
            </section>
            
    `
}

function loadPokemonDetail(pokemonName) {
    pokeApi.getPokemonDetailByName(pokemonName).then((pokemon) => {
        const newHtml = convertPokemonDetail(pokemon);
        document.getElementById('modal-content').innerHTML = newHtml;
        document.getElementById('modal').style.display = 'flex';
    });
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}







