export default function page1() {

    const page1 = document.createElement('div')
    page1.id = 'page1'

    const content = document.createElement('div')
    content.id = 'page1-content'

    const textArea = document.createElement('textarea')
    textArea.id = 'main-input'
    
    content.appendChild(textArea)
    page1.appendChild(content)

    return page1

}