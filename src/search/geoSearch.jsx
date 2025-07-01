import { orderByDistance } from 'geolib';

export function geoSearch(lat, lon, documents) {
    var results = orderByDistance({ latitude: lat, longitude: lon }, documents);
    return results.slice(0, 10);
}
