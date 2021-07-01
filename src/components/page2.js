export default function page2() {

    const page2 = document.createElement('div')
    page2.id = 'page2'

    const content = document.createElement('div')
    content.id = 'page2-content'
    content.innerHTML = '<p>"Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length. And sometimes when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals-sounds that say listen to this, it is important.</p><br><p>So write with a combination of short, medium, and long sentences. Create a sound that pleases the reader\'s ear. Don\'t just write words. Write music."</p><br><p>-David Provost</p>'

    page2.appendChild(content)

    return page2

}