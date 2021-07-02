import controller from './controller';
import folder from '../Class/folder';

const listener = (function listeners() {

    //Static listeners
    function writingListener() {     

        const textArea = document.querySelector('#main-input')
        textArea.addEventListener('input', function () {
            controller.write()
        })

    }

    function newDocListener() {     
        const newDocBtn = document.querySelector('.add-doc-cont')
        newDocBtn.addEventListener('click', function () {  
            controller.createNewDoc()
        })
    }

        //Dev listener
    function devListen() {
        document.addEventListener('keydown', function (e) {

            if (e.key == 'Escape') {
                console.clear()
                console.log(folder)
            }
           
        })
    }

    //dynamic listeners
        //delete doc buttons
    function deleteDoc() {
        
        const deleteBtns = document.querySelectorAll('.delete')
        deleteBtns.forEach( (element, key) => {
          element.addEventListener('click', function (event) {
              controller.delDoc(key)
          })  
        })

    }
        //change active document button listeners
    function changeDoc() {
        
        const docBtns = document.querySelectorAll('.doc-details')
        docBtns.forEach( (element, key) => {
            element.addEventListener('click', function () {
                controller.changeDoc(key)
            })
        })

    }
        //Document title input listeners
    function changeTitle() {
        const titleInputs = document.querySelectorAll('.doc-title')
        titleInputs.forEach( (element, key) => {
            element.addEventListener('input', function () {
                controller.changeTitle(key, element.value)
            })
        })
    }

    //Initializers
    function initializeListeners() {
        writingListener()  
        newDocListener()
        initDynamic()
        devListen()
    }

    function initDynamic(){
        deleteDoc()
        changeDoc()
        changeTitle()
    }

    return { 
        initializeListeners: initializeListeners,
        initDynamic: initDynamic,
    }

}())

export default listener