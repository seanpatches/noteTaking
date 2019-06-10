const request = (path, method, body = {}) => {
  //eslint-disable-next-line
  return fetch(`${process.env.API_URL}${path}`, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw `unable to ${path}`;
      
      return json;
    });
};

export const post = (path, note) => request(path, 'POST', note);
export const get = (path, note) => request(path, 'POST', note);
