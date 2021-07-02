export default class document {

    constructor() {

        this.title = 'Enter document title';
        this.content = 'Write here...';
        this.fontSize = '12px'; //default font size       

        //Set the created date of the document when initialized
        this.created = ''
        this.initCreated = function () {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();
        
            this.created = `${dd}-${mm}-${yyyy}`
        }
        this.initCreated()

        //Set the custom ID of the document when its initialized
        this.id = '';
        this.initId = function () {
            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            this.id = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
        this.initId()
    
    }

    splitLines(){

        const content = this.content
        const arrayOfLines = content.match(/[^\r\n]+/g);
        return arrayOfLines

    }

    splitSentences(array){

        let containerArray = []

        array.forEach(element => {
            
            const sentencesArray = element.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
            containerArray.push(sentencesArray)

        })

        return containerArray

    }

    constructOutput(sentences){
        
        const outputString = []

        sentences.forEach(para => {

            let paraArray = []

            para.forEach(sentence => {
                
                const length = sentence.trim().split(/\s+/).length
                let sentenceString = ''

                if (length == 1 || length == 2) {
                    sentenceString = `<span class='vShort'>${sentence}</span>`
                }else if (length > 2 && length < 5) {
                    sentenceString = `<span class='short'>${sentence}</span>`
                }else if(length > 4 && length < 19){
                    sentenceString = `<span class='medium'>${sentence}</span>`
                }else if(length > 18 && length < 54){
                    sentenceString = `<span class='long'>${sentence}</span>`
                }else if(length > 53){
                    sentenceString = `<span class='vLong'>${sentence}</span>`
                }
                
                paraArray.push(sentenceString)

            });

            const concatedPara = paraArray.join('')
            const ptaggedPara = `<p>${concatedPara}</p>`
            outputString.push(ptaggedPara)

        })

        return outputString.join('')

    }

    coloredContent(){

        if (this.content) {

            const paraArray = this.splitLines()
            const sentences = this.splitSentences(paraArray)
            const formatted = this.constructOutput(sentences)

            return formatted

        }

        return

    }

}