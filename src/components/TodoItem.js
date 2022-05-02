import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  return (<li>{todo.title}</li>);
};

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    },
  ).isRequired,
};
export default TodoItem;
