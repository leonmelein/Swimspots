import * as JsSearch from 'js-search'

export function textSearch(documents) {
    var search = new JsSearch.Search('name');
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    search.addIndex('name');
    search.addIndex('placename');
    search.addDocuments(documents);
    return search;
}