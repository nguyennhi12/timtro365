export const ApiUntils = {
  login: async account => {
    const endpoint = `${API_URL}${Account}login`;
    const result = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(e => {
        return e.text();
      })
      .then(text => {
        return JSON.parse(text);
      })
      .catch(function (error) {
        
      });
    return result;
  },
};
