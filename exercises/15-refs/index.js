import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: ''
    };
  }
  changeName() {
    // TODO
  }
  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='first'>First Name</label>
          <input
            value={this.state.first}
            onChange={this.changeName.bind(this)}
            type='text'
            className='form-control'
            id='first'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='last'>Last Name</label>
            <input
              value={this.state.last}
              onChange={this.changeName.bind(this)}
              type='text'
              className='form-control'
              id='last'
            />
        </div>
      </div>
    );
  }
}

export default User;
