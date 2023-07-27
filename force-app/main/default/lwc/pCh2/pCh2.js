import { LightningElement,track,api } from 'lwc';

export default class PCh2 extends LightningElement {
    @api pch2=0;
    handleChange(event){
        this.pch2=event.target.value;
        console.log("pch2",this.pch2);
        this.dispatchEvent(new CustomEvent("finalvalue",{detail: {value:this.pch2}}));
    }
}