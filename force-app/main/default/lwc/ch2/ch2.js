import { LightningElement,api,track } from 'lwc';

export default class Ch2 extends LightningElement {
   
   ch2;
    handleChange(event){
        
        this.ch2=event.target.value;
        console.log('ch2',this.ch2);
        this.dispatchEvent(new CustomEvent("progressvaluechange1", {detail: {value:this.ch2}}));
    }
}