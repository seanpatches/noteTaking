import React from 'react';
import PropTypes from 'prop-types';

function SingleNote({ note }) {
  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p>{note._id}</p>
    </>
  );
}

SingleNote.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default SingleNote;
