import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="row row-cols-lg-2 row-cols-1  mt-5 g-5">
      <div className="col">
        <h1 className="title">How to work Context API</h1>
        <p>
          Context API is used in contrast to props. This is a very powerful
          thing. We use props to give data from one component to the number of
          child components below it, in this case we have to send data in the
          form of props to each. But Context API can easily send data to all of
          the following folders by placing the data in the top one. It can send
          all kinds of data. Can send more than one data.
        </p>
      </div>
      <div className="col">
        <h1 className="title">What is semantic Tag</h1>
        <p>
          A semantic tag lets developers easily understand what is where and
          why. Seeing this, one can understand what is the place of the layout.
          Arranged in a meaningful way. The semantic tag is the meaningful tag.
          What is on the web site can be understood by semantic tag.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
