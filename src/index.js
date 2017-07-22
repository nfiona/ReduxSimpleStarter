import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// define full path to access a file
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD8hkVlfY3ZivaU1TT8h0hJPCxsl_CAXKI';

// Refactor Functional Component to Class-Based. Initialize a state.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [ ] };

    // youtube-api-search
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // equals to this.setState( { videos: videos });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/> {/* pass data from parent component's state */}
      </div>
    );
  }
}


// Render the component into the DOM. Instatiate the component name, and
// define a target container as a second argument (see index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
