import { CREATE_NOTE, CREATE_NOTE_PENDING, FETCH_NOTES, FETCH_NOTES_PENDING, FETCH_SINGLE_NOTE, FETCH_SINGLE_NOTE_PENDING } from '../actions/noteActions';
const initialState = {
  loading: false,
  title: '',
  body: '',
  list: [],
  singleNote: {}
};

export default function notesReducer(state = initialState, action) {
  switch(action.type){
    case CREATE_NOTE_PENDING: 
      return { ...state, loading: true };
    case CREATE_NOTE: 
      return { ...state, title: action.payload.title, body: action.payload.body, loading: false };
    case FETCH_NOTES:
      return { ...state, list: action.payload, loading: false  };
    case FETCH_NOTES_PENDING:
      return { ...state, loading: true };
    case FETCH_SINGLE_NOTE:
      return { ...state, singleNote: action.payload, loading: false };
    case FETCH_SINGLE_NOTE_PENDING:
      return { ...state, loading: true };
    default: return state;
  }
}
