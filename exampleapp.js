class Admi{
    
    constructor(firstname,lastname,age){
     this.firstname=firstname;
     this.lastname=lastname;
     this.age=age;

    }
    bacchayadav(){
        return`hello ${this.firstname} ${this.lastname}`;
    }
    upddate(nayanaam){
        this.lastname=nayanaam;
    }
    static sum(x,y){
        return x+y;
    }
}
class dusraadmi extends Admi{
    constructor(firstname,lastname,age,gender){
        super(firstname,lastname,age);
        this.gender=gender;
    }
}
let d=new dusraadmi('sahil','khalid',18,'male');

d.upddate('baccchayadav')
console.log(dusraadmi.sum(1,3));