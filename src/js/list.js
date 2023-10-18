import { getDistance } from "./sort"; 

let countries;

const fetchLocations = async () => {
    countries = await fetch(
        '/data/locations.geojson'
    ).then(res => res.json());
};

export const showLocations = async (search_term="", lat = 0.0, lon = 0.0) => {
    const ul = document.getElementById('resultlist');
    ul.innerHTML = '';

    // getting the data
    await fetchLocations();
    let data = countries['features']


    if (lat && lon) {
        data = data.sort((a, b) => {
            const distanceToA = getDistance(lat, lon, a.geometry.coordinates[1], a.geometry.coordinates[0]);
            const distanceToB = getDistance(lat, lon, b.geometry.coordinates[1], b.geometry.coordinates[0]);
            return distanceToA - distanceToB;
        })
    }

    var items = data.filter(item =>
        item.properties.name.toLowerCase().includes(search_term.toLowerCase())
    )

    items.slice(0,50).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item['properties']['name']
        ul.appendChild(li);
    });
};

