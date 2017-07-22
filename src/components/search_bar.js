import React, { Component } from 'react';

// create component using class and give access to all functionality that React.Component has.
// Class-based component must have a render method. Render functions must return a JSX.
class SearchBar extends Component {
  // initialize state inside a constructor method.
  constructor (props) {
    super(props);

    this.state = { term: ''};
  }


  render() {
    // set new State. Input's value equals to current state.
    // When input value changes, update the state (OnChange Event Handler). Then, when the
    // component re-renders, update the input's value to the new (manipulated) state.
    return (
      <div>
        <input
            value={this.state.term}
            onChange={ event => this.setState({ term: event.target.value}) }
          />
        Current Input's Value = {this.state.term}
      </div>
    );
    }







  }

// export/ make component available globally.
export default SearchBar;
