import { geoIpLocate } from "./geoIP"
import { textSearch, geoSearch } from "./search"


var documents = [
    {
        "id": 304872,
        "name": "De Grote Speelweide, Amsterdamse Bos",
        "alternate_name": "De Grote Speelweide",
        "current_status": "WAARSCHUWING",
        "description": "De Grote Speelweide ligt in het Amsterdamse Bos. De waterdiepte van de vijver varieert van 1 tot 1,5 meter.",
        "photos": "NH-089-001 Amsterdamse Bos.png",
        "website": null,
        "lat": 52.3197,
        "lon": 4.8282,
        "eu_designation": "2",
        "e_coli": 77.0,
        "int_ent": 230.0,
        "amenities": [
            5943892, 5943898, 5943927, 5943930, 5943907, 5943893, 5943911, 5943913
        ],
        "warnings": null
    },
    {
        "id": 304874,
        "name": "Stadsstrand Groningen",
        "alternate_name": "De Grote Speelweide",
        "current_status": "WAARSCHUWING",
        "description": "De Grote Speelweide ligt in het Amsterdamse Bos. De waterdiepte van de vijver varieert van 1 tot 1,5 meter.",
        "photos": "NH-089-001 Amsterdamse Bos.png",
        "website": null,
        "lat": 52.3197,
        "lon": 4.8282,
        "eu_designation": "2",
        "e_coli": 77.0,
        "int_ent": 230.0,
        "amenities": [
            5943892, 5943898, 5943927, 5943930, 5943907, 5943893, 5943911, 5943913
        ],
        "warnings": null
    },
    {
        "id": 1153,
        "name": "Nieuwe Meer, Noordoever",
        "alternate_name": "Noordoever",
        "current_status": "goed",
        "description": "De Nieuwe Meer ligt ten zuidwesten van Amsterdam. De maximum diepte is ongeveer 30 meter.\r\nLet op! Deze locatie wordt momenteel niet bemonsterd en is gekoppeld aan Nieuwe Meer Westzijde Oeverlanden. De waterkwaliteitsgegevens zijn daarom hetzelfde als bij de Westzijde Oeverlanden.",
        "photos": "Nieuwe Meer Noordoever.PNG",
        "website": null,
        "lat": 52.335,
        "lon": 4.8157,
        "eu_designation": 0,
        "e_coli": null,
        "int_ent": null,
        "amenities": null,
        "warnings": null
    },
    {
        "id": 7960110,
        "name": "Zwemsteiger Nieuwe Meer",
        "alternate_name": "Nieuwe Meer",
        "current_status": "goed",
        "description": "De zwemsteiger Nieuwe Meer ligt in het Amsterdamse Bos, aan de zuidoostkant van de Nieuwe Meer.",
        "photos": null,
        "website": null,
        "lat": 52.3329,
        "lon": 4.8465,
        "eu_designation": 0,
        "e_coli": 46.0,
        "int_ent": 15.0,
        "amenities": [5943892, 5943893, 5943911, 5943930],
        "warnings": null
    }
]

const searchElement = document.getElementById('searchbar');
const searchHandler = textSearch(documents);

const resultsElement = document.getElementsByClassName('results')[0]
const placeholderElement = document.getElementsByClassName('placeholder')[0]

document.getElementById('location').addEventListener('click', e => {
    navigator.geolocation.getCurrentPosition((position) => {
        resultsElement.innerHTML = ""
        console.log(position.coords.latitude, position.coords.longitude);
        searchElement.value = "Huidige locatie"
        placeholderElement.classList.add('hidden')
        resultsElement.classList.remove('hidden')

        var results = geoSearch(position.coords.latitude, position.coords.longitude, documents)
        results.forEach(element => {
            console.log(element.name);
            resultsElement.innerHTML += `<h3 class="result-card">${element.name}</h3>`;
        });
    });
});

const searchData = (event) => {
    const value = event.target.value;
    console.log("Searching...", value);

    if (value.length > 0){
        resultsElement.innerHTML = ""
        placeholderElement.classList.add('hidden')
        resultsElement.classList.remove('hidden')
        var results = searchHandler.search(value);
        results.forEach(element => {
            console.log(element.name);
            resultsElement.innerHTML += `<h3 class="result-card">${element.name}</h3>`;
        });
    } else {
        placeholderElement.classList.remove('hidden')
        resultsElement.classList.add('hidden')
    }

    // your API call logic goes here
}

const debounce = (callback, waitTime) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, waitTime);
    };
}

const debounceHandler = debounce(searchData, 300);

searchElement.addEventListener('input', debounceHandler);
searchElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        console.log("Enter!", event.target.value)
    }
})

// Approximate location based on IP when geolocation is not available
await navigator.permissions.query({ name: 'geolocation' }).then(async (value) => {
        if (value.state == "granted") {
            console.log("Geolocation access")
        } else {
            console.log("Geo IP")
            await geoIpLocate()
        }
    }
);


