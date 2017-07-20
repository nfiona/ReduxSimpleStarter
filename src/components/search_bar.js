import React, { Component } from 'react';

// define searchbar component (the below is functional component).
    // const SearchBar = () => {
    //   return <input />;
    // };

// create component using class and give access to all functionality that React.Component has.
// Class-based component must have a render method. Render functions must return a JSX.
class SearchBar extends Component {
  render() {
    // create an input element, and pass an Event Handler as 'prop={value}'. See more props on React Docs.
    return <input onChange={this.onInputChange} />;
  }
  
  // define Event Handler. Syntax: "on" + name of element + name of event.
  onInputChange(event) {
    console.log(event.target.value);
  }
}

// export/ make component available globally.
export default SearchBar;
