export class Functions {
    numberOne:any;
    numberTwo:any;
    average:any;
    result:any;

    constructor() {
        this.numberOne = "";
        this.numberTwo = "";
        this.average = "";
        this.result = "";
    }

    public calculateAges() {
        this.result = this.numberOne + this.numberTwo;
    }

    public averageAges() {
        this.average = (this.numberOne+this.numberTwo)/2;
    }

    public cleanForm(){
        this.numberOne = "";
        this.numberTwo = "";
        this.average = "";
        this.result = "";
    }
}
