'use strict';

console.log('app js is running');

var appTemplate = React.createElement(
  'div',
  null,
  'hi'
);

var app = document.getElementById('app');

ReactDOM.render(appTemplate, app);
