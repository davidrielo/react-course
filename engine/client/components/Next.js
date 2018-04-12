import React, { PropTypes } from 'react';

const Next = ({
  index,
  size
}) => {
  const nextHref = ((index > 0) && (index < size))
  ? `#${index + 1}`
  : null;

  const next = !nextHref ? null : (
    <a href={nextHref} className='go-next-btn'>
    Next
    <span
    className='glyphicon glyphicon-triangle-right'
    aria-hidden='true'
    />
    </a>
  );
  return next;
};

Next.propTypes = {
  index: PropTypes.number,
  size: PropTypes.number
};

module.exports = Next;
