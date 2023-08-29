import { showLocations } from "./list";
import { setUpMap } from "./map";
import { geoIpLocate } from "./geoIP"
await setUpMap();

let {_, geoLocation} = await setUpMap();
showLocations("");

// Search
document.getElementById('search').addEventListener('input', e => {
    showLocations(e.target.value);
});

// Geolocation updates
geoLocation.on('geolocate', function (e) {
    console.log(e.coords.latitude, e.coords.longitude);
    showLocations("", e.coords.latitude, e.coords.longitude)
})

geoIpLocate()