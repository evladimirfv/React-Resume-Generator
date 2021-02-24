import React from 'react';
import faker from 'faker';




const getTime = function () {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" +
    today.getSeconds();
  return time;
}


const BlogComment = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="text avatar" src={faker.image.image()} />
        </a>
        <div className="content">
          <a className="author" href="/">
            Samuel
        </a>
          <div className="metadata">
            <span>Today at: {getTime()} </span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BlogComment;