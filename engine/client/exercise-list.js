const React = require('react');

const {
  PropTypes
} = React;

const ExerciseList = ({
  exercises
}) => {
  const links = exercises.map((exercise) => {
    const {
      index,
      title
    } = exercise;

    const href = `#${index}`;

    return (
      <li key={index}>
        {index}: <a href={href}>{title}</a>
      </li>
    );
  });

  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <div className='component'>
            <ul>
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

ExerciseList.defaultProps = {
  exercises: []
};

module.exports = ExerciseList;
