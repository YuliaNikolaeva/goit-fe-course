const link = 'http://localhost:3000/notes';


export const getNotes = () => {
  return fetch(link).then(response => {
    if(response.ok) {
      return response.json();
    };

    throw new Error('ERR: note not get:' + response.statusText);
  });
};

export const saveNote = (note) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  };

  return fetch(link, options).then(response => {
    if(response.ok) {
      return response.json();
    };

    throw new Error('ERR: note not added:' + response.statusText);
  });
};

export const delNote = (id) => {
  const options = {
    method: 'DELETE'
  };

  return fetch(`${link}/${id}`, options).then(response => {
    if(response.ok) {
      return response.json();
    };

    throw new Error('ERR: note not deleted:' + response.statusText);
  });
};