import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  tick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  // TODO implement `componentWillUnmount`
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 100);
  }
  render() {
    return (
      <span>
        Own count: {this.state.count}<br />
        Parent count: {this.props.count}
      </span>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      show: false
    };
  }
  tick() {
    this.setState({
      count: this.state.count + 1,
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(this.tick.bind(this), 1000);
  }
  render() {
    const display = this.state.show ? (
      <Display
        count={this.state.count}
      />
    ) : '';

    return (
      <div>{display}</div>
    );
  }
}
