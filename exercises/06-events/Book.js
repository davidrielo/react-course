import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { read: this.props.read };
  }

  // TODO add the missing event!
  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          <input
            type='checkbox'
            checked={this.state.read}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
