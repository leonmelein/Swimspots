import { showCountries } from "./search";
import { setUpMap } from "./map";

let coords = {};

let {map, geoLocation} = await setUpMap();
geoLocation.on('geolocate', function(e) {
    console.log(e.coords.latitude, e.coords.longitude);
})


// List
showCountries("");
document.getElementById('search').addEventListener('input', e => {
    showCountries(e.target.value);
});
