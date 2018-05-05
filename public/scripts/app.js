'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app js is running');

var obj = {
  name: 'Vikram',
  getName: function getName() {
    return this.name;
  }
};

// let getName = obj.getName.bind(obj);
var getName = obj.getName.bind({ name: 'ABC' });

console.log(getName());

// 026 Creating a React Component

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return React.createElement(
        'div',
        { className: 'header' },
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',

    // handelPick() {
    //   alert('hello')
    // }
    value: function render() {
      return React.createElement(
        'div',
        { className: 'btn-group mb-2' },
        React.createElement(
          'button',
          { disabled: !this.props.hasOption, onClick: this.props.handalePick, className: 'btn btn-primary' },
          'What should I do'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',

    // constructor(props) {
    //   super(props);
    //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(e) {
    //   e.preventDefault();
    //   // alert('remove all');
    //   console.log(this.props.options);
    // }
    value: function render() {
      return React.createElement(
        'div',
        { className: 'options-list' },
        React.createElement(
          'div',
          { className: 'btn-group' },
          React.createElement(
            'button',
            { disabled: this.props.optionsIsHere, onClick: this.props.removeAllOptions, className: 'btn btn-danger' },
            'Remove all'
          )
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'add-option-list' });
    }
  }]);

  return AddOption;
}(React.Component);

// let appTemplate = (
//   <div className="col-md-8 mx-auto text-center">
//     <Header />
//     <Action />
//     <Option />
//     <AddOption />
//   </div>
// );

var Form = function (_React$Component5) {
  _inherits(Form, _React$Component5);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this5 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this5.addOptions = _this5.addOptions.bind(_this5);
    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(Form, [{
    key: 'addOptions',
    value: function addOptions(e) {
      e.preventDefault();

      var value = e.target.elements.option.value.trim();
      var error = this.props.addOption(value);

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'form-wraper' },
        React.createElement(
          'form',
          { onSubmit: this.addOptions },
          this.state.error && React.createElement(
            'p',
            null,
            this.state.error
          ),
          React.createElement('input', { type: 'text', className: 'form-control mb-2', placeholder: 'Type something', name: 'option' }),
          React.createElement(
            'button',
            { className: 'btn btn-info' },
            'Add Option'
          )
        )
      );
    }
  }]);

  return Form;
}(React.Component);

;

var Counter = function (_React$Component6) {
  _inherits(Counter, _React$Component6);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this6 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this6.hadnleAdd = _this6.hadnleAdd.bind(_this6);
    _this6.handleMinus = _this6.handleMinus.bind(_this6);
    _this6.handleReset = _this6.handleReset.bind(_this6);
    _this6.state = {
      count: 0
    };
    return _this6;
  }

  _createClass(Counter, [{
    key: 'hadnleAdd',
    value: function hadnleAdd() {
      console.log('hadnleAdd');
      // this.setState((e) => {
      //   return {
      //     count: e.count + 1
      //   };
      // })
      this.setState(function (e) {
        return { count: e.count + 1 };
      });
    }
  }, {
    key: 'handleMinus',
    value: function handleMinus() {
      console.log('handleMinus');
      // this.setState((e) => {
      //   return {
      //     count: e.count - 1
      //   }
      // })
      this.setState(function (e) {
        return { count: e.count - 1 };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      console.log('handleReset');
      // this.setState(() => {
      //   return {
      //     count: 0
      //   };
      // })
      // set state new formating
      this.setState(function () {
        return { count: 0 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'counter-wraper my-3' },
        React.createElement(
          'h2',
          null,
          'Counter : ',
          this.state.count
        ),
        React.createElement(
          'div',
          { className: 'btn-group' },
          React.createElement(
            'button',
            { onClick: this.hadnleAdd, className: 'btn btn-primary' },
            '+1'
          ),
          React.createElement(
            'button',
            { disabled: this.state.count === 0, onClick: this.handleMinus, className: 'btn btn-seconadry' },
            '-1'
          ),
          React.createElement(
            'button',
            { onClick: this.handleReset, className: this.state.count === 0 ? 'disabled btn btn-danger' : 'btn btn-danger' },
            'Reset'
          )
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

;

var Visibilty = function (_React$Component7) {
  _inherits(Visibilty, _React$Component7);

  function Visibilty(props) {
    _classCallCheck(this, Visibilty);

    var _this7 = _possibleConstructorReturn(this, (Visibilty.__proto__ || Object.getPrototypeOf(Visibilty)).call(this, props));

    _this7.visibiltyToggle = _this7.visibiltyToggle.bind(_this7);
    _this7.state = {
      visibilty: false
    };
    return _this7;
  }

  _createClass(Visibilty, [{
    key: 'visibiltyToggle',
    value: function visibiltyToggle() {
      // alert('working');
      // set state new fomarting
      this.setState(function (e) {
        return { visibilty: !e.visibilty };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'visibilty-wraper' },
        React.createElement(
          'h1',
          null,
          'Visibilty Toggole is here'
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { onClick: this.visibiltyToggle, className: 'btn btn-danger' },
            this.state.visibilty === false ? 'Show More' : 'Hide Details'
          ),
          this.state.visibilty && React.createElement(
            'div',
            null,
            'visibilty'
          )
        )
      );
    }
  }]);

  return Visibilty;
}(React.Component);

;

// 027 Nesting Components

var FirstApp = function (_React$Component8) {
  _inherits(FirstApp, _React$Component8);

  function FirstApp(props) {
    _classCallCheck(this, FirstApp);

    var _this8 = _possibleConstructorReturn(this, (FirstApp.__proto__ || Object.getPrototypeOf(FirstApp)).call(this, props));

    _this8.removeAllOptions = _this8.removeAllOptions.bind(_this8);
    _this8.handalePick = _this8.handalePick.bind(_this8);
    _this8.addOption = _this8.addOption.bind(_this8);
    _this8.state = {
      options: ['Option One', 'Option Two', 'Option Three']
    };
    return _this8;
  }

  _createClass(FirstApp, [{
    key: 'removeAllOptions',
    value: function removeAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handalePick',
    value: function handalePick() {
      // alert("test");
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(option);
      alert(option);
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      console.log(option);
      if (!option) {
        return 'Add Vaild Value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This value already exists';
      }
      // this.setState ((e) => {
      //   return {
      //     options: e.options.concat([option])
      //   };
      // })
      // set state type new formating
      this.setState(function (e) {
        return { options: e.options.concat([option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "My First React App",
          subtitle = "Some text here";
      // options = ['Option One', 'Option Two', 'Option Three'];
      return React.createElement(
        'div',
        { className: 'col-md-8 mx-auto text-center' },
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOption: this.state.options.length > 0, handalePick: this.handalePick }),
        React.createElement(Options, { options: this.state.options, optionsIsHere: this.state.options.length === 0, removeAllOptions: this.removeAllOptions }),
        React.createElement(AddOption, null),
        React.createElement(Form, { addOption: this.addOption }),
        React.createElement(Counter, null),
        React.createElement(Visibilty, null)
      );
    }
  }]);

  return FirstApp;
}(React.Component);

var Option = function (_React$Component9) {
  _inherits(Option, _React$Component9);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'option-list' },
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

;

var app = document.getElementById('app');

ReactDOM.render(React.createElement(FirstApp, null), app);

// ReactDOM.render(appTemplate, app);
