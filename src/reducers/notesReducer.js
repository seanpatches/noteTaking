import { CREATE_NOTE, CREATE_NOTE_PENDING } from '../actions/noteActions';

export default function notesReducer(state = {}, action) {
  switch(action.type){
    case CREATE_NOTE_PENDING: 
      return { ...state, loading: true };
    case CREATE_NOTE: 
      return { ...state, title: action.payload.title, body: action.payload.body,  };
    default: return state;
  }
}
