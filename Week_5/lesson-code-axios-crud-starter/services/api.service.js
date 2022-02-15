const axios = require('axios');

/* const api = axios.create({
  baseURL: 'https://ih-crud-api.herokuapp.com'
})

api.get('/characters')
.then((response) => console.log(response))
.catch((err) => next(err))
 */

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com',
    });
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };

  getOneCharacter = (id) => {
    return this.api.get(`/characters/${id}`);
  };

  createCharacter = (characterInfo) => {
    return this.api.post('/characters', characterInfo);
  };

  editCharacter = (id, characterInfo) => {
    return this.api.put(`/characters/${id}`, characterInfo);
  };

  deleteCharacter = (id) => {
    return this.api.delete(`/characters/${id}`);
  };
}

module.exports = ApiService;
