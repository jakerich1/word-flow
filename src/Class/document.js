export default class document {

    constructor() {

        this.title = 'Enter document title';
        this.content = '';
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

}