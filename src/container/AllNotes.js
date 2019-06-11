import React, { PureComponent } from 'react';
import { fetchNotes } from '../actions/noteActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes, getNotesLoading } from '../selectors/noteSelectors';
import Notes from '../components/notes/Notes';

class AllNotes extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps){
    console.log('updated', prevProps.notes);
  }
  render() {
    const { notes, loading } = this.props;
    if(loading) return <h1>Loading</h1>;

    return <Notes notes={notes} />;
  }
}

const mapStateToProps = state => ({
  notes: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(){
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
