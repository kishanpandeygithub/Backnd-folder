// let arr =[1 ,2 ,3];
// let arr2 =[1 ,2 ,3];

// arr.sayHello = ()=>{
//     console.log("Hello I am arr");
// }

// arr2.sayHello = ()=>{
//     console.log("Hello I am arr");
// }
// console.log(arr.__proto__);


//factory function 
// function personMaker(name ,age){
//     const preson ={
//         name:name ,
//         age: age ,
//         talk(){
//             console.log(`Helllo my name is ${this.name}`);
//         }
//     };
//     return preson;
// }


//new operator

//constructors
// function Person(name , age){
//     this.name =name;
//     this.age =age;
// }

// Person.prototype.talk =function(){
//     console.log(`Hi ! My name is ${this.name}`);
// }

// let p1 = new Person("kishan" , 25);
// let p2 = new Person("Rishabh" , 25);
// console.log(p1);
// console.log(p2);

//class
class Person{
    constructor(name ,age){
        this.name =name;
        this.age =age;
    }
    talk(){
        console.log(`Hi , My name is ${this.name}`);
    }
}

let p1 = new Person("adam" , 25);
let p2 = new Person("eve" , 25);

// console.log(p1.talk==p2.talk);

class Student extends Person{
    constructor(name ,age , marks){
        super(name , age);
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name ,age , subject){
        super(name , age);
        this.subject = subject;
    }
}

let s1 = new Student("rishika" , 12 , 99);
console.log(s1);
let t1 = new Teacher("kajal" , 12 , "Math");
console.log(t1);

