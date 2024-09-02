import * as JsSearch from 'js-search'
import { orderByDistance } from 'geolib';


export function textSearch(documents) {
    var search = new JsSearch.Search('name');
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    search.addIndex('name');
    search.addDocuments(documents);
    return search;
}

export function geoSearch(lat, lon, documents) {
    var results = orderByDistance({ latitude: lat, longitude: lon }, documents);
    return results.slice(0, 5);
}
