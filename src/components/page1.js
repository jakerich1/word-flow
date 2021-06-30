export default function page1() {

    const page1 = document.createElement('div')
    page1.id = 'page1'

    const content = document.createElement('div')
    content.id = 'page1-content'

    page1.appendChild(content)

    return page1

}