import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Note({ note }) {
  return (
    <>
      <Link to={note._id}>{note.title}</Link>
      <p>{note.body}</p>
    </>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Note;
