'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appTemplate = React.createElement(
    'div',
    null,
    'hi i am es6'
);

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown Person';

        _classCallCheck(this, Person);

        // console.log('test');
        // this.name = name || 'Other Person';
        this.name = name;
    }

    _createClass(Person, [{
        key: 'getContent',
        value: function getContent() {
            // return 'Hi I am ' + this.name + '!';
            return 'Hi I am ' + this.name + '!';
        }
    }]);

    return Person;
}();

var AnotherPerson = function () {
    function AnotherPerson() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unkown Man';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, AnotherPerson);

        this.name = name;
        this.age = age;
    }

    _createClass(AnotherPerson, [{
        key: 'getElement',
        value: function getElement() {
            return 'Hi i am ' + this.name + ' and i am ' + this.age + ' ' + (this.age > 1 ? 'years' : 'year') + ' old.';
        }
    }]);

    return AnotherPerson;
}();

var Student = function (_AnotherPerson) {
    _inherits(Student, _AnotherPerson);

    function Student(name, age) {
        var subject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Undecided';

        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.subject = subject;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            //    return (this.subject && this.subject);
            return !!this.subject;
        }
    }, {
        key: 'myDescription',
        value: function myDescription() {
            var des = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getElement', this).call(this);
            if (this.hasMajor()) {
                //    des = des + ` The major subject is ${this.subject}`;
                des += ' The major subject is ' + this.subject;
            }
            return des;
        }
    }]);

    return Student;
}(AnotherPerson);

var Traveler = function (_AnotherPerson2) {
    _inherits(Traveler, _AnotherPerson2);

    function Traveler(name, age) {
        var hometown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Unknown';

        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.hometown = hometown;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'hasHomeTown',
        value: function hasHomeTown() {
            return this.hometown && this.hometown;
        }
    }, {
        key: 'getTraveler',
        value: function getTraveler() {
            var des = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getElement', this).call(this);
            if (this.hasHomeTown()) {
                des += 'My home town is ' + this.hometown;
            }
            return des;
        }
    }]);

    return Traveler;
}(AnotherPerson);

var traveler_one = new Traveler();
console.log(traveler_one.getTraveler());

var traveler_two = new Traveler('Tagore', 20, 'Dhaka');
console.log(traveler_two.getTraveler());

console.log('-------------------------------------');

var you = new Student();
console.log(you.myDescription());

var persons = new Student('Tagore', 20, 'Computer Science');
console.log(persons.myDescription());

console.log('-------------------------------------');

var me = new Person('Kanta Paul');
console.log(me.getContent());

var other = new Person();
console.log(other.getContent());

var es6 = document.getElementById('es6');

ReactDOM.render(appTemplate, es6);
