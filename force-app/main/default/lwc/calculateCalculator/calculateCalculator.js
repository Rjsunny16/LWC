import { LightningElement,track } from 'lwc';

export default class CalculateCalculator extends LightningElement {
    @track number1;
    @track number2;
    @track ans;
    handlerChange(event){
        this.number1 = event.target.value;
        console.log('number1',this.number1);
    }
    handlerChange1(event){
        this.number2 = event.target.value;
        console.log('number2',this.number2);
    }
    add = ()=>{
        console.log('numbers',this.number1,this.number2);

        if (this.number1!=null && this.number2!=null){
            console.log('Inside if',this.number1,this.number2);
            this.ans= parseInt( this.number1)+parseInt( this.number2);
            console.log('ans',this.ans);
        }
        else {
            this.ans= 0;
        }
    }
    mul = ()=>{
        if (this.number1!=null && this.number2!=null){
            this.ans= parseInt( this.number1)*parseInt( this.number2);
        }
        else{
            this.ans= 0;
        }
    }
    div = ()=>{
        if (this.number1!=null && this.number2!=null){
            this.ans=(parseInt( this.number1)/parseInt( this.number2));
        }
        else{
            this.ans= 0;
        }
    }
    sub = ()=>{
        if (this.number1!=null && this.number2!=null){
            this.ans= (parseInt( this.number1)-parseInt( this.number2));
        }
        else{
            this.ans= 0;
        }
    }

}