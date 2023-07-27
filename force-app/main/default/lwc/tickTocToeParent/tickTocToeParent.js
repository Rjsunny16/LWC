import { LightningElement,track } from 'lwc';

export default class TickTocToeParent extends LightningElement {
    @track player1;
    @track player2;
    @track player1Progress =0;
    @track player2Progress =0;
    flag = false;
    value ;

    get options() {
        return [
            { label: 'Jaipur', value: 'jaipur' },
            { label: 'Lalitpur', value: 'lalitpur' },
            { label: 'kolkata', value: 'kolkata' },
        ];
    }
    handleChange(event){
        let name= event.target.name;
        if(name==="PlayerName1"){
            this.player1=event.target.value;
        }
        else if (name==="PlayerName2"){
            this.player2=event.target.value;
        }
        else if (name ==="City"){
            this.value = event.target.value;
        }
    }
    handleOnchange(event){
        this.flag = event.target.checked;
    }
}