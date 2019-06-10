export const newNoteToApi = note => {
  return Promise.resolve({
    _id: '12345',
    ...note
  });
};
