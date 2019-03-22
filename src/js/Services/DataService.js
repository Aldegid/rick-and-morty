class DataService {
  constructor() {

  }


  getCharacters() {
    const api = `https://rickandmortyapi.com/api/character/`
    return fetch(api).then(response =>
      response.ok ? response.json() : Promise.reject(response.statusText)
    );
  }
}

export default new DataService();
