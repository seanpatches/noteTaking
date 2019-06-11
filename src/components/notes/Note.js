import React from 'react';
import PropTypes from 'prop-types';

function Note({ note }) {
  return (
    <>
      <h2>{note.title}</h2>
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
