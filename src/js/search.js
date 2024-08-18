import lunr from "lunr"

export function searchSetup(documents){

    var idx = lunr(function () {
        this.ref('id')
        this.field('name')

        documents.forEach(function (doc) {
            this.add(doc)
        }, this)
    })
    return idx;
}