import { LightningElement,api,track} from 'lwc';

export default class PCh1 extends LightningElement {
    @track ch1;
    @track ch2;
    totalChild=0;
    childChange(){
        this.totalChild=parseInt(this.ch1)+parseInt(this.ch2);
        console.log('connected callback pch1ch1',this.totalChild);
        if(this.totalChild!=null ){
            this.dispatchEvent(new CustomEvent("progressvalueparentchange", {
                detail: {value:(this.totalChild)}
              }));
        }
    }
    hanldeProgressValueChange(event){
        
        this.ch1=event.detail.value;
        console.log('pch1ch1',this.ch1);

    }
    hanldeProgressValueChange1(event){
        this.ch2=event.detail.value;
        console.log('pch1ch2',this.ch2);

    }
}