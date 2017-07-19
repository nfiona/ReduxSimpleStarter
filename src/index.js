import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD8hkVlfY3ZivaU1TT8h0hJPCxsl_CAXKI';

// Create a new component that should produce HTML. The below is a class, written in ES6.
const App = () => {
  return <div>Hi!</div>;
}

// Render the component into the DOM. Instatiate the component name, and
// define a target container as a second argument (see index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
