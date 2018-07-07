var Azim = {
    name: 'Azim',
    yearOfBirth: 1999,
    job: 'programmer'
};
var Person = function(name, yearOfBirth, job){
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job,
    this.age = 2018 -  yearOfBirth 
};
Person.prototype.agein = function() {
    console.log(2033 - this.yearOfBirth)
}
var samanta = new Person('Samanta',2001,'student')
samanta.agein();
console.log(samanta);

var meProto = {
    calculateAge: function (){
        console.log(2018 - this.yearOfBirth);
    }
};
var Azim = Object.create(meProto);
Azim.yearOfBirth = 1999;
Azim.name = 'Azimiddin';
Azim.job = 'phd Peolard';

var shahzod = Object.create(meProto);

shahzod.name = 'Shahzod';
shahzod.tea = 'Akbar Tea';
shahzod.class = 14;

var obj1 = {
    name: 'Azim',
    age: 12,
    job: 'student'
};

var obj2 = obj1;
obj1.name = 'Shahzod';

console.log(obj1.name , obj2.name , obj1.age, obj2.age);

var ages = [1999,2001,2004,1996,1993];
function calcArray(arr, funct){
    arrCal = [];
    for(i = 0; i < arr.length; i++){
        arrCal.push(funct(arr[i]));
    }
    return arrCal;
};
function manageArr(el){
    return 2018 - el;
}
function isFullAge(el){
    return 2018 - el >= 18
}
function heartRate(el){
    return Math.round(206.9 - (0.67 * (2018-el) ));
}
var age = calcArray(ages, manageArr);
var result = calcArray(ages, isFullAge);
var rate = calcArray(ages, heartRate);

console.log(result);
console.log(age);
console.log(rate)

function asker(job){
    if(job === 'teacher'){
        return function(name){
            console.log("Mr. "+ name + ", how much 5 cost?");
        }
    }else if(job === 'coder'){
        return function(name){
            console.log("What is JavaScript, " + name + "?")
        }
    }
}
asker('coder')("Samantha");
asker('teacher')("Azim");

function dayUntilDeath(ageDeath){
    message = " years until your death";
    return  function(yearOfBirth){
        console.log((ageDeath - (2018 - yearOfBirth)) + message);
    }
}