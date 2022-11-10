import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{category}</h4>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
