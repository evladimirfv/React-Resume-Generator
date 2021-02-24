

import React from 'react';
import ReactDOM from 'react-dom';

import BlogComment from './BlogComment';





const App = () => {
  return (
    <div> {BlogComment()}{BlogComment()}{BlogComment()} </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

