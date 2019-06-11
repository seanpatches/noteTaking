import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { getSingleNote } from '../selectors/noteSelectors';
import SingleNote from '../components/notes/SingleNote';
import { fetchSingleNote } from '../actions/noteActions';

class NoteDetail extends PureComponent{
  static propTypes = {
    fetchSingleNote: PropTypes.func.isRequired
  }

  state = {
    note: {},
    selectedNote: ''
  }

  componentDidMount(){
    this.props.fetchSingleNote();
  }

  render() {
    return <SingleNote note={this.state.note} />;
  }

}

const mapDispatchToProps = dispatch => ({
  fetchSingleNote(title){
    dispatch(fetchSingleNote(title));
  }
});

const mapStateToProps = (state, props) => ({
  note: getSingleNote(state),
  selectedNote: props.match.params.title
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
