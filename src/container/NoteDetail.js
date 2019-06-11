import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { getSingleNote } from '../selectors/noteSelectors';
import SingleNote from '../components/notes/SingleNote';
import { fetchSingleNote } from '../actions/noteActions';

class NoteDetail extends PureComponent{
  static propTypes = {
    fetchSingle: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
    selectedNote: PropTypes.string.isRequired
  }

  componentDidMount(){
    this.props.fetchSingle(this.props.selectedNote);
  }

  render() {
    if(!this.props.note) return <h1>Loading</h1>;
    return <SingleNote note={this.props.note} />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSingle(id){
    dispatch(fetchSingleNote(id));
  }
});

const mapStateToProps = (state, props) => {
  return ({
    note: getSingleNote(state),
    selectedNote: props.match.params.id
  });};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
