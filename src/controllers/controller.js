import folder from '../Class/folder';
import DOMcontrol from './DOMcontroller';
import listener from './listener';

const controller = (function listeners() {

    function createNewDoc() {

        let animate = (folder.docs.length == 5) ? false : true
        folder.createDoc()
        DOMcontrol.showDocs(animate)
        listener.initDynamic()
        controller.updateTextArea()
        controller.updatePage2()
        controller.setLocal()

        return

    }

    function delDoc(key) {

        folder.removeDoc(key)
        folder.initializeActive()
        DOMcontrol.showDocs()
        listener.initDynamic()
        DOMcontrol.setActiveDoc(key)
        controller.updateTextArea()
        controller.updatePage2()
        controller.setLocal()
        return

    }

    function changeDoc(key) {

        folder.setActiveByKey(key)
        DOMcontrol.setActiveDoc(key)
        controller.updateTextArea()
        controller.updatePage2()
        controller.setLocal()
        return

    }

    function changeTitle(key, title) {

        folder.docs[key].title = title
        controller.setLocal()
        return

    }

    function updateTextArea() {

        if (folder.getActiveKey() || folder.getActiveKey() == 0) {
            DOMcontrol.textAreaContent()
            return
        } else {
            document.querySelector('#main-input').value = ''
        }
        controller.setLocal()

    }

    function write() {

        const textArea = document.querySelector('#main-input')

        if (folder.getActiveKey() || folder.getActiveKey() == 0) {
            folder.docs[folder.getActiveKey()].content = textArea.value
            controller.updatePage2()
            return
        }

        textArea.value = ''

        alert('Create a document first by clicking the document icon on the left hand side')
        controller.setLocal()
        return

    }

    function updatePage2() {

        const page2 = document.querySelector('#page2-content')

        if (folder.getActiveKey() || folder.getActiveKey() == 0) {

            const activeDoc = folder.docs[folder.getActiveKey()]
            page2.innerHTML = activeDoc.coloredContent()

        } else {

            page2.innerHTML = ''

        }

    }

    function setLocal() {

        const tempProjects = JSON.stringify(folder.docs)
        window.localStorage.setItem('wf-docs', tempProjects)

    }

    function getLocal() {

        const storedProjects = window.localStorage.getItem('wf-docs')
        let sProjParsed = JSON.parse(storedProjects)

        if (sProjParsed !== null) {

            sProjParsed.forEach((element, key) => {

                folder.createDoc()
                folder.docs[key].content = element.content
                folder.docs[key].id = element.id
                folder.docs[key].created = element.created
                folder.docs[key].title = element.title
                folder.setActiveByKey(key)

            })

            controller.updateTextArea()
            controller.updatePage2()
            DOMcontrol.setActiveDoc(0)
            DOMcontrol.showDocs()
            listener.initDynamic()

        } else {

            document.querySelector('#main-input').value = '"Now listen.I vary the sentence length, and I create music.Music.The writing sings.It has a pleasant rhythm, a lilt, a harmony.I use short sentences.And I use sentences of medium length.And sometimes when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals-sounds that say listen to this, it is important. \n\nSo write with a combination of short, medium, and long sentences.Create a sound that pleases the reader\'s ear. Don\'t just write words.Write music." \n\n-Gary Provost'
            document.querySelector('#page2-content').innerHTML = '<p><span class="vShort">"Now listen.</span><span class="medium">I vary the sentence length, and I create music.</span><span class="vShort">Music.</span><span class="short">The writing sings.</span><span class="medium">It has a pleasant rhythm, a lilt, a harmony.</span><span class="short">I use short sentences.</span><span class="medium">And I use sentences of medium length.</span><span class="long">And sometimes when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals-sounds that say listen to this, it is important.</span></p><p><span class="medium">So write with a combination of short, medium, and long sentences.</span><span class="medium">Create a sound that pleases the reader\'s ear.</span><span class="short">Don\'t just write words.</span><span class="vShort">Write music."</span></p><p><span class="vShort">-Gary Provost</span></p>'

        }

    }

    return {
        createNewDoc: createNewDoc,
        delDoc: delDoc,
        changeDoc: changeDoc,
        changeTitle: changeTitle,
        updateTextArea: updateTextArea,
        write: write,
        updatePage2: updatePage2,
        setLocal: setLocal,
        getLocal: getLocal
    }

}())

export default controller