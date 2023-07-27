import { LightningElement,api} from 'lwc';

export default class Ch1 extends LightningElement {
    
     ch1;
    handleChange(event){
        this.ch1=event.target.value;

        console.log('ch1',this.ch1);
        this.dispatchEvent(new CustomEvent("progressvaluechange", {detail: {value:this.ch1}}));
    }
}