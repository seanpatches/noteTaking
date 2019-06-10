import { createNote } from './noteActions';

jest.mock('../services/noteApi.js', () => ({
  newNoteToApi() {
    return Promise.resolve([]);
  }
}));

describe('notes actions', () => {
  it('creates an action to create a note', () => {
    const noteAction = createNote({
      title: 'hi',
      body: 'there'
    });

    expect(noteAction).toEqual({
      type: 'CREATE_NOTE',
      pendingType: 'CREATE_NOTE_PENDING',
      fulfilledType: 'CREATE_NOTE_FULFILLED',
      rejectedType: 'CREATE_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
