import React from 'react';
import timediff from 'timediff';
import raf from 'component-raf';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColon: true
    };
  }
  // TODO componentWillReceiveProps
  // TODO shouldComponentUpdate
  render() {
    const colon = this.state.showColon ? ':' : ' ';

    return (
      <span>
        {this.props.s}{colon}{this.props.ms}
      </span>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      s: 0,
      ms: 0,
      start: new Date()
    };
  }

  tick() {
    const diff = timediff(this.state.start, new Date());

    this.setState({
      ms: diff.milliseconds,
      s: diff.seconds
    });
  }
  tock() {
    this.tick();
    raf(this.tock.bind(this));
  }
  componentDidMount() {
    this.tock();
  }
  reset() {
    this.setState({
      start: new Date()
    });
  }
  render() {
    return (
      <div>
        <span>Elapsed time: </span><Display s={this.state.s} ms={this.state.ms} />
        <br />
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}
