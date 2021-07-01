import controller from './controller';

const listener = (function listeners() {

    function writingListener() {     
        const textArea = document.querySelector('#main-input')
        textArea.addEventListener('input', function () {
            console.log(textArea.value)
        })
    }

    function newDocListener() {     
        const newDocBtn = document.querySelector('.add-doc-cont')
        newDocBtn.addEventListener('click', function () {  
            controller.createNewDoc()
        })
    }

    function deleteDoc() {
        
        const deleteBtns = document.querySelectorAll('.delete')
        deleteBtns.forEach( (element, key) => {
          element.addEventListener('click', function (event) {
              controller.delDoc(key)
          })  
        })

    }

    function initializeListeners() {
        writingListener()  
        newDocListener()
        deleteDoc()
    }

    return { 
        initializeListeners: initializeListeners,
        deleteDoc: deleteDoc 
    }

}())

export default listener