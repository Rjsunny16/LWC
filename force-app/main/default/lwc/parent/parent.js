import { LightningElement,api,track } from 'lwc';

export default class Parent extends LightningElement {
    @track child2;
    @track child1;
    @track totalSum;
    parentChange(){
        console.log('Parent connected callback',this.child1,this.child2);
        if(this.child1!=null && this.child2!=null){
            this.totalSum =parseInt(this.child1)+parseInt(this.child2);
        }
    }

    changeValue(event){
        
        this.child2=event.detail.value;
        console.log('Parent function',this.child2);
    }
    changevaluefromchild1(event){
        this.child1=event.detail.value;
        console.log('Parent function2',this.child1);
    }
}