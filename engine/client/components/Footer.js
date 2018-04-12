import React, { PropTypes } from 'react';
import Back from './Back';
import Next from './Next';

const Footer = ({
  index,
  title,
  size
}) => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className="pull-right">
            <Back index={index} title={title} />
            <Next index={index} size={size} />
          </div>
        </div>
        <div className='row'>
          <a href='http://www.24i.com/' target='_blank'>© 24i MediaB.V. {year}</a>  Check out our github <a href='https://github.com/24i' target='_blank'>https://github.com/24i/</a>!
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  size: PropTypes.number
};

Footer.defaultProps = {
  title: ''
};

module.exports = Footer;
