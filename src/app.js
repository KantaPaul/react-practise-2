console.log('app js is running');

let obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
}

// let getName = obj.getName.bind(obj);
let getName = obj.getName.bind({name: 'ABC'});

console.log(getName())

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
  // handelPick() {
  //   alert('hello')
  // }
  render () {
    return (
      <div className="btn-group mb-2">
        <button disabled={!this.props.hasOption} onClick={this.props.handalePick} className="btn btn-primary">What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }
  // handleRemoveAll(e) {
  //   e.preventDefault();
  //   // alert('remove all');
  //   console.log(this.props.options);
  // }
  render() {
    return (
      <div className="options-list">
        {/* <div className="option-map">
          {this.props.options.map(option =>{
            return <p className="text-danger" key={option}>{option}</p>
          })}
        </div> */}
        <div className="btn-group">
          {/* <a href="#" onClick={this.handleRemoveAll.bind(this)} className="btn btn-danger">Remove all</a> */}
          <button disabled={this.props.optionsIsHere} onClick={this.props.removeAllOptions} className="btn btn-danger">Remove all</button>
        </div>
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
      <div className="add-option-list"></div>
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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addOptions = this.addOptions.bind(this);
    this.state = {
      error: undefined
    }
  }
  addOptions (e) {
    e.preventDefault();
    
    let value = e.target.elements.option.value.trim();
    let error = this.props.addOption(value);

    this.setState(() => {
      return {
        error: error
      }
    })
  }
  render () {
    return (
      <div className="form-wraper">
        <form onSubmit={this.addOptions}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" className="form-control mb-2" placeholder="Type something" name="option" />
          <button className="btn btn-info">Add Option</button>
        </form>
      </div>
    );
  }
};

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.hadnleAdd = this.hadnleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  hadnleAdd() {
    console.log('hadnleAdd');
    this.setState((e) => {
      return {
        count: e.count + 1
      };
    })
  }
  handleMinus() {
    console.log('handleMinus');
    this.setState((e) => {
      return {
        count: e.count - 1
      }
    })
  }
  handleReset() {
    console.log('handleReset');
    this.setState(() => {
      return {
        count: 0
      };
    })
  }
  render() {
    return (
      <div className="counter-wraper my-3">
        <h2>Counter : {this.state.count}</h2>
        <div className="btn-group">
          <button onClick={this.hadnleAdd} className="btn btn-primary">+1</button>
          <button disabled={this.state.count === 0} onClick={this.handleMinus} className="btn btn-seconadry">-1</button>
          <button onClick={this.handleReset} className={this.state.count === 0 ? 'disabled btn btn-danger': 'btn btn-danger'}>Reset</button>
        </div>
      </div>
    );
  }
};

class Visibilty extends React.Component {
  constructor(props) {
    super(props);
    this.visibiltyToggle = this.visibiltyToggle.bind(this);
    this.state = {
      visibilty: false
    }
  }
  visibiltyToggle() {
    // alert('working');
    this.setState((e) => {
      return {
        visibilty: !e.visibilty
      };
    })
  }
  render() {
    return (
      <div className="visibilty-wraper">
        <h1>Visibilty Toggole is here</h1>
        <div>
          <button onClick={this.visibiltyToggle} className="btn btn-danger">{this.state.visibilty === false ? 'Show More': 'Hide Details'}</button>
          {
            this.state.visibilty && (
              <div>visibilty</div>
            )
          }
        </div>
      </div>
    );
  }
};

// 027 Nesting Components
class FirstApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handalePick = this.handalePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.state = {
        options:  ['Option One', 'Option Two', 'Option Three']
    }
  }
  removeAllOptions() {
    this.setState(() => {
      return {
        options: []
      };
    })
  }
  handalePick() {
    // alert("test");
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    console.log(option);
    alert(option);
  }
  addOption(option) {
    console.log(option);
    if (!option) {
      return 'Add Vaild Value'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This value already exists'
    }
    // this.setState ((e) => {
    //   return {
    //     options: e.options.concat([option])
    //   };
    // })
    this.setState((e) => ({options: e.options.concat([option])}));
  }
  render () {
    let title = "My First React App",
        subtitle = "Some text here";
        // options = ['Option One', 'Option Two', 'Option Three'];
    return (
      <div className="col-md-8 mx-auto text-center">
        <Header title={title} subtitle={subtitle}/>
        <Action hasOption={this.state.options.length > 0} handalePick={this.handalePick} />
        <Options options={this.state.options} optionsIsHere={this.state.options.length === 0} removeAllOptions={this.removeAllOptions}/>
        <AddOption />
        <Form addOption={this.addOption}/>
        <Counter />
        <Visibilty />
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