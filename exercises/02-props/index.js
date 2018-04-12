import React from 'react';

class Book extends React.Component {
  render() {
    return (<div>
      {/* TODO use the properties to render the name of the book and the read status */}
    </div>);
  }
}

// TODO
Book.defaultProps = {};

class Library extends React.Component {
  render() {
    const read = true;
    const title = 'Professional Node.js: Building JavaScript Based Scalable Software';

    return (
      <ul>
        {/* don't declare any attributes here */}
        <li><Book /></li>
        {/* TODO pass the title and read values to Book by using the Book tag attributes */}
        <li><Book /></li>
      </ul>
    );
  }
}

export default Library;
