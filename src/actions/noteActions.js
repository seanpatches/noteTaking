import { createAction } from 'promise-middleware-redux';
import { newNoteToApi, getNotesFromApi, getSingleNoteFromApi } from '../services/noteApi';

export const [
  createNote,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE_REJECTED
] = createAction('CREATE_NOTE', newNoteToApi);

export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING
] = createAction('FETCH_NOTES', getNotesFromApi);

export const [
  fetchSingleNote,
  FETCH_SINGLE_NOTE,
  FETCH_SINGLE_NOTE_PENDING
] = createAction('FETCH_SINGLE_NOTE', getSingleNoteFromApi);
