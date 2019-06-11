import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import NoteForm from '../components/notes/NoteForm';
import { createNote, fetchNotes } from '../actions/noteActions';
 
class CreateNote extends PureComponent {
  static propTypes = {
    makeNote: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  submitHandler = event => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.makeNote({ title, body });
    this.setState({ title:'', body: '' });
    this.props.fetch();
  }

  render(){
    const { title, body } = this.state;
    return (
      <NoteForm
        onChange={this.handleChange}
        onSubmit={this.submitHandler}
        title={title}
        body={body}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  makeNote(note){
    dispatch(createNote(note));
  },
  fetch(){
    dispatch(fetchNotes());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateNote);
