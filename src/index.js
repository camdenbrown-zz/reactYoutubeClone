import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = 'AIzaSyBzhtf19k_kI8l-sgtiynDXdIpMXIS9HiY';

const App = () =>
{
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));