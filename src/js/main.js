import { textSearch, geoSearch } from "./search"
import {fetchLocations} from "./data"

var documents = await fetchLocations();

const searchElement = document.getElementById('searchbar');
const searchHandler = textSearch(documents);

const resultsElement = document.getElementsByClassName('results')[0]
const placeholderElement = document.getElementsByClassName('placeholder')[0]

function result_template(item){
    return `<div class="result-card">
                    <h3 class="result-title">${item.name}</h3>
                    <p>${item.current_status}</p>
                    <p class="result-description">${item.amenities}</p>
                </div>
                <hr/>`;
}

function clear_placeholder(){
    placeholderElement.classList.add('hidden')
    resultsElement.classList.remove('hidden')
    resultsElement.innerHTML = ""
}

function show_placeholder(){
    resultsElement.innerHTML = ""
    placeholderElement.classList.remove('hidden')
    resultsElement.classList.add('hidden')
}

document.getElementById('location').addEventListener('click', _ => {
    searchGeolocation();
});

function searchGeolocation(){
    navigator.geolocation.getCurrentPosition((position) => {
        searchElement.value = "Huidige locatie"
        clear_placeholder()

        var results = geoSearch(position.coords.latitude, position.coords.longitude, documents)
        results.forEach(element => {
            console.log(element.name);
            resultsElement.innerHTML += result_template(element);
        });
    });
}

function searchText(event) {
    const value = event.target.value;
    console.log("Searching...", value);

    if (value.length > 0){
        clear_placeholder();
        var results = searchHandler.search(value);
        results.forEach(element => {
            console.log(element.name);
            resultsElement.innerHTML += result_template(element);
        });
    } else {
        show_placeholder();
    }
}

searchElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchText(event)
    }
})

searchElement.addEventListener("input", (event) => {
    console.log(event.target.value);
    if (event.target.value.length == 0){
        show_placeholder();
    }
})

