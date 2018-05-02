console.log('app js is running');

// 026 Creating a React Component

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render () {
    return (
      <div className="btn-group">
        <a href="#" className="btn btn-primary">What should I do</a>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div className="options-list">
        {/* <div className="option-map">
          {this.props.options.map(option =>{
            return <p className="text-danger" key={option}>{option}</p>
          })}
        </div> */}
        {
          this.props.options.map(option => {
            return <Option key={option} optionText={option} />
          })
        }
        {/* <Option /> */}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div className="add-option-list">
        Add option is here
      </div>
    );
  }
}

// let appTemplate = (
//   <div className="col-md-8 mx-auto text-center">
//     <Header />
//     <Action />
//     <Option />
//     <AddOption />
//   </div>
// );

// 027 Nesting Components
class FirstApp extends React.Component {
  render () {
    let title = "My First React App",
        subtitle = "Some text here",
        options = ['Option One', 'Option Two', 'Option Three'];
    return (
      <div className="col-md-8 mx-auto text-center">
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Option extends React.Component {
  render () {
    return (
      <div className="option-list">
        {this.props.optionText}
      </div>
    );
  }
};

let app = document.getElementById('app');

ReactDOM.render(<FirstApp />, app);

// ReactDOM.render(appTemplate, app);