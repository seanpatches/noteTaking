import { post } from './request.js';

export const newNoteToApi = note => {
  return post('/notes', note);
};

// export const getAllNotesFromApi = () => {
//   return get('/notes');
// };
