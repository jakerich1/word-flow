import folder from "../Class/folder"

const DOMcontrol = (function listeners() {

    function showDocs(animate) {
        
        const docArea = document.querySelector('#doc-area')
        docArea.innerHTML = ''
        const documentObj = folder.docs

        documentObj.forEach((element, key) => {
          
            const docCont = document.createElement('div')
            docCont.classList.add('docBtn')

            if (folder.isActive(element.id)) {
                docCont.style.outline = '1px solid #61c5ff'
            }

            const details = document.createElement('div')
            details.classList.add('doc-details')

            const docTitle = document.createElement('input')
            docTitle.value = element.title
            docTitle.classList.add('doc-title')
            details.appendChild(docTitle)

            const docCreated = document.createElement('div')
            docCreated.innerHTML = `Created: ${element.created}`
            docCreated.classList.add('doc-created')
            details.appendChild(docCreated)

            docCont.appendChild(details)
            
            const deleteBtn = document.createElement('div')
            deleteBtn.classList.add('delete')
            deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>'
            docCont.appendChild(deleteBtn)

            docArea.appendChild(docCont)
            
            const lastKey = key + 1
            if (lastKey == documentObj.length && animate) {
                docCont.style.animation = '1s ease-out 0s 1 fadeIn'
            }

        })

    }

    function setActiveDoc() {
        
        const docBtns = document.querySelectorAll('.docBtn')
        docBtns.forEach((element, key) => {
            if (key == folder.getActiveKey()) {
                element.style.outline = '1px solid #61c5ff'
            }else{
                element.style.outline = 'none'
            }
        })

    }

    function textAreaContent() {

        const textArea = document.querySelector('#main-input')
        textArea.value = folder.docs[folder.getActiveKey()].content

    }

    return { 
        showDocs: showDocs, 
        setActiveDoc: setActiveDoc,
        textAreaContent: textAreaContent
    }

}())

export default DOMcontrol