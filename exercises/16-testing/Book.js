import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      read: this.props.read
    };
  }
  toggleRead() {
    this.setState({
      read: !this.state.read
    });
  }
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>
          <input
            type='checkbox'
            checked={this.state.read}
            onChange={this.toggleRead.bind(this)}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
