import { getDistance } from "./sort"; 

let countries;

const fetchCountries = async () => {
    countries = await fetch(
        '/data/locations.geojson'
    ).then(res => res.json());
};

export const showCountries = async (search_term) => {
    const ul = document.getElementById('resultlist');
    ul.innerHTML = '';

    // getting the data
    await fetchCountries();
    let data = countries['features']
    const lat = 52.3641429
    const lon = 4.836666

    let sortedData = data.sort((a, b) => {
        const distanceToA = getDistance(lat, lon, a.geometry.coordinates[1], a.geometry.coordinates[0]);
        const distanceToB = getDistance(lat, lon, b.geometry.coordinates[1], b.geometry.coordinates[0]);
        return distanceToA - distanceToB;
    })

    var items = sortedData.filter(item =>
        item.properties.name.toLowerCase().includes(search_term.toLowerCase())
    )

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item['properties']['name']
        ul.appendChild(li);
    });
};

