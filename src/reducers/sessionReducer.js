import { SET_SESSION } from '../actions/sessionActions';

const initialState = {
  username: '',
  token: '',
  imageUrl: ''
};

export default function sessionReducer(state = initialState, action){
  switch(action.type){
    case SET_SESSION:
      return action.payload;
    default:
      return state;
  }
}
