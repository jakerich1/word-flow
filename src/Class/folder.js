import document from "./document.js";

const folder = (function folder() {

    let docs = []
    let activeDoc = ''

    function createDoc() {

        if (docCount() == 5) {
            alert('You have hit you maximum number of documents. Create an account to increase capacity.')
            return
        }

        let newDoc = new document()
        docs.push(newDoc)
        activeDoc = newDoc.id
        return
    }

    function removeDoc(key) {
        docs.splice(key, 1)
        console.log('Document removed')
        return
    }

    function docCount() {
        return docs.length
    }

    return {
        docs: docs,
        createDoc: createDoc,
        removeDoc: removeDoc,
        docCount: docCount
    }

}())

export default folder