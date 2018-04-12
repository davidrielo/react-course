const React = require('react');

const {
  PropTypes
} = React;

const Instructions = ({
  slug
}) => {
  const __html = slug.length
    ? require(`../../exercises/${slug}/readme.md`)
    : require('../../exercises/readme.md');

  const text = React.createElement('div', {
    dangerouslySetInnerHTML: {
      __html
    }
  });

  return (
    <div className='instructions'>
      <div className='container'>
        <div className='row md'>
          {text}
        </div>
      </div>
    </div>
  );
};

Instructions.propTypes = {
  slug: PropTypes.string
};

Instructions.defaultProps = {
  slug: ''
};

module.exports = Instructions;
