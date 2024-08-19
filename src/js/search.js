import * as JsSearch from 'js-search'

export function searchSetup(documents){
    var search = new JsSearch.Search('name');
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    search.addIndex('name');
    search.addDocuments(documents);
    return search;
}