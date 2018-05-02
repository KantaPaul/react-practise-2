let appTemplate = (
    <div>
      hi i am es6
    </div>
);

class Person {
    constructor(name = 'Unknown Person') {
        // console.log('test');
        // this.name = name || 'Other Person';
        this.name = name;
    }
    getContent() {
        // return 'Hi I am ' + this.name + '!';
        return `Hi I am ${this.name}!`;
    }
}

class AnotherPerson {
    constructor (name = 'Unkown Man', age = 0) {
        this.name = name;
        this.age = age;
    }
    getElement() {
        return `Hi i am ${this.name} and i am ${this.age} ${this.age > 1 ? 'years' : 'year'} old.`
    }
}

class Student extends AnotherPerson {
   constructor(name, age, subject = 'Undecided') {
        super(name, age);
        this.subject = subject;
   }
   hasMajor() {
    //    return (this.subject && this.subject);
    return !!this.subject;
   }
   myDescription() {
       let des = super.getElement();
       if (this.hasMajor()) {
        //    des = des + ` The major subject is ${this.subject}`;
        des += ` The major subject is ${this.subject}`;
       }
       return des;
   }
}

class Traveler extends AnotherPerson {
    constructor(name,age,hometown = 'Unknown') {
        super(name, age);
        this.hometown = hometown;
    }
    hasHomeTown() {
        return (this.hometown && this.hometown);
    }
    getTraveler() {
        let des = super.getElement();
        if (this.hasHomeTown()) {
            des += `My home town is ${this.hometown}`
        }
        return des;
    }
}

let traveler_one = new Traveler();
console.log(traveler_one.getTraveler());

let traveler_two = new Traveler('Tagore', 20, 'Dhaka');
console.log(traveler_two.getTraveler());

console.log('-------------------------------------');

let you = new Student();
console.log(you.myDescription());

let persons = new Student('Tagore', 20, 'Computer Science');
console.log(persons.myDescription());

console.log('-------------------------------------');

let me = new Person('Kanta Paul');
console.log(me.getContent());

let other = new Person();
console.log(other.getContent());


let es6 = document.getElementById('es6');

ReactDOM.render(appTemplate, es6);