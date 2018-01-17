export class Button{
    value:string;
    index:number;
    constructor(value:boolean,index:number){
        this.index=index;
        if (value==true){
            this.value="ON"
        }else{
            this.value="OFF"
        }
    }
}