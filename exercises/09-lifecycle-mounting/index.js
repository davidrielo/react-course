import React from 'react';

class Count extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1
    };
  }
  componentWillMount() {
    console.clear();
    // TODO
  }
  // TODO implement componentDidMount
  render() {
    console.log('rendering');
    return (
      <h1>The count is: {this.state.count}</h1>
    );
  }
}

export default Count;
