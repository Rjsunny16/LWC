import { LightningElement,track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @track countnum=0;
    countNumber(){
       this.dispatchEvent(new CustomEvent("countmessage",{detail: 'Counting is '+ (++this.countnum)}));
    }

}