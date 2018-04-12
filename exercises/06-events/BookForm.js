import React from 'react';

class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      read: false
    };
  }

  changeTitle(ev) {
    // TODO change the title
  }
  changeRead() {
    // TODO change the read value
  }
  addBook() {
    // TODO update the parent!

    // reset the inputs
    this.setState({
      title: '',
      read: false
    });
  }
  render() {
    return (
      <div>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            value={this.state.title}
            onChange={this.changeTitle}
            placeholder='Title' type='text'
            className='form-control'
            id='title'
          />
        </div>
        <div className="form-group">
          <label htmlFor='read'>
            <span>Read: </span>
            <input
              checked={this.state.read}
              onChange={this.changeRead}
              type='checkbox'
              id='read'
            />
          </label>
        </div>
        <div className='form-group'>
          <button
            className='btn btn-default'
            onClick={this.addBook}
          >Add Book</button>
        </div>
      </div>
    );
  }
}

export default BookForm;
