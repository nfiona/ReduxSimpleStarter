import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that should produce HTML. The below is a class.
const App = function() {
  return <div>Hi!</div>;
}

// Render the component into the DOM. Instatiate the component name, and define a target container as a second argument (see index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
