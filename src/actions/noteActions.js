import { createAction } from 'promise-middleware-redux';
import { newNoteToApi } from '../services/noteApi';

export const [
  createNote,
  CREATE_NOTE,
  CREATE_NOTE_PENDING,
  CREATE_NOTE_FULFILLED,
  CREATE_NOTE_REJECTED
] = createAction('CREATE_NOTE', newNoteToApi);
