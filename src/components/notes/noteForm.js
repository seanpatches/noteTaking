import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body }) {
  return (
    <form onSubmit={onSubmit}>
      <input name='title' value={title} onChange={onChange}></input>
      <input name='body' value={body} onChange={onChange}></input>
      <button>Submit</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default NoteForm;
