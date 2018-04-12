import React, { PropTypes } from 'react';

const Back = ({
  index,
  title
}) => {
  const backHref = index > 1
    ? `#${index - 1}`
    : '#';

  const backTitle = index > 1
    ? 'Previous'
    : 'List';

  const back = !title.length ? null : (
    <a href={backHref} className='go-back-btn'>
      <span
        className='glyphicon glyphicon-triangle-left'
        aria-hidden='true'
      />
      {backTitle}
    </a>
  );

  return back;
};

Back.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string
};

module.exports = Back;
