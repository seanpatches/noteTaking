import { post, get } from './request.js';

export const newNoteToApi = note => {
  return post('/notes', note);
};

export const getNotesFromApi = () => {
  return get('/notes');
};

export const getSingleNoteFromApi = (id) => {
  return get(`/notes/${id}`);
};
