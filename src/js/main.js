import { geoIpLocate } from "./geoIP"

// Search
// document.getElementById('searchbar').addEventListener('input', e => {
//     console.log(e.target.value);
// });
const searchElement = document.getElementById('searchbar');


document.getElementById('location').addEventListener('click', e => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('Locate!');
        console.log(position.coords.latitude, position.coords.longitude);
        searchElement.value = "Huidige locatie"
    });
});

const placeholderElement = document.getElementsByClassName('placeholder')[0]
const resultsElement = document.getElementsByClassName('results')[0]

const searchData = (event) => {
    const value = event.target.value;
    console.log("Searching...", value);

    if (value.length > 0){
        placeholderElement.classList.add('hidden')
        resultsElement.classList.remove('hidden')
        resultsElement.innerHTML = `<h3 class="result-card">${value}</h3>`
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


