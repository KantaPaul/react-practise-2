"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app js is running');

// 026 Creating a React Component

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "btn-group" },
        React.createElement(
          "a",
          { href: "#", className: "btn btn-primary" },
          "What should I do"
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "options-list" },
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "add-option-list" },
        "Add option is here"
      );
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

// 027 Nesting Components


var FirstApp = function (_React$Component5) {
  _inherits(FirstApp, _React$Component5);

  function FirstApp() {
    _classCallCheck(this, FirstApp);

    return _possibleConstructorReturn(this, (FirstApp.__proto__ || Object.getPrototypeOf(FirstApp)).apply(this, arguments));
  }

  _createClass(FirstApp, [{
    key: "render",
    value: function render() {
      var title = "My First React App",
          subtitle = "Some text here",
          options = ['Option One', 'Option Two', 'Option Three'];
      return React.createElement(
        "div",
        { className: "col-md-8 mx-auto text-center" },
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return FirstApp;
}(React.Component);

var Option = function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "option-list" },
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
