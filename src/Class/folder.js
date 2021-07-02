import document from "./document.js";

const folder = (function folder() {

    let docs = []
    let activeDoc = ''

    function createDoc() {

        if (docCount() == 5) {
            alert('You have hit you maximum number of documents.')
            return
        }

        let newDoc = new document()
        docs.push(newDoc)
        activeDoc = newDoc.id
        return

    }

    function removeDoc(key) {

        docs.splice(key, 1)
        return
    }

    function docCount() {
        return docs.length
    }

    function initializeActive() {

        if (docs.length > 0) {
            activeDoc = docs[0].id
        }else{
            activeDoc = ''
        }
        return
    }

    function isActive(id) {
        if (id == activeDoc) {
            return true
        }
        return false
    }

    function getActiveKey() {

        if (activeDoc) {
            return docs.findIndex(x => x.id === activeDoc)    
        }
        
        return

    }

    function setActiveByKey(key) {
        activeDoc = docs[key].id
        return
    }

    

    return {
        docs: docs,
        createDoc: createDoc,
        removeDoc: removeDoc,
        docCount: docCount,
        initializeActive: initializeActive,
        isActive: isActive,
        setActiveByKey: setActiveByKey,
        getActiveKey: getActiveKey
    }

}())

export default folder