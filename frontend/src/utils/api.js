import axios from './axios';

export async function fetchNotes() {
  try {
    const data = await axios.get('/note');
    return data;
  } catch (ex) {
    return ex;
  }
}

export async function postNote(content) {
  const data = await axios.post('/note', {
    content
  });

  return data;
}

export async function deleteNote(id) {
  await axios.delete('/note/' + id);
}

export async function updateNote(id, newContent) {
  await axios.put('/note/' + id, {
    content: newContent
  });
}
