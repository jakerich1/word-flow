import folder from '../Class/folder';
import DOMcontrol from './DOMcontroller';
import listener from './listener';

const controller = (function listeners() {

    function createNewDoc() {
        
        let animate = (folder.docs.length == 5) ? false: true
        folder.createDoc()
        DOMcontrol.showDocs(animate)
        listener.deleteDoc()

    }

    function delDoc(key) {

        folder.removeDoc(key)
        DOMcontrol.showDocs()
        listener.deleteDoc()

    }

    return { 
        createNewDoc: createNewDoc, 
        delDoc: delDoc
    }


}())

export default controller