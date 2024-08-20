function consle1(){
    console.log("this is ./src/person.js1111")
}

function consle2(){
    console.log("this is ./src/person.js2222")
}

class Person{
    constructor(name,age){
        this.age=age;
        this.name=name;
        
    }
    walk(){
        return "person "+this.name+" is walking"
    }
}

export default consle1;
export {consle2,Person};