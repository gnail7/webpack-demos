const React = require('react');
const ReactDOM = require('react-dom');

const element = React.createElement('h1', null, 'Hello, world!');

ReactDOM.render(
  element,
  document.querySelector('#wrapper')
);
