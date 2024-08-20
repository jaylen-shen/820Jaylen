class Person{
    constructor(name,age){
        this.age=age;
        this.name=name;
        
    }
    walk(){
        return "person "+this.name+" is walking"
    }
}

class Student extends Person{
    constructor(name,age,ID){
        super(name,age)
        this.ID=ID;
    }
}

//let p1=new Person('sjl1', 20,123)
let p2=new Student('sjl3',24,123)
//console.log(p2.walk())
console.log(111)

/*const consle2 = require('./src/Person.js');
const personjs = require('./src/Person.js');*/
import * as p from "./src/Person.js"
let ppp=new p.Person();
ppp.walk()

/*let numbers=[5,4,3,2,1]
let array1=numbers.map((item)=>item*item)
let array2=numbers.filter((item)=>item%2===0)
let sum3=numbers.reduce((total,value)=>{
    return total+=value
},0)
console.log(sum3)
*/
import express from "express";

import isPrime from "prime-number-check";
import _ from "lodash"
import * as randomWords from "random-words";
console.log(randomWords.generate())
console.log(isPrime(30))
console.log(randomWords.count(10))
