export default class ApiService {

  _apiBase = 'http://localhost:8000/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  createResource = async (url, resource) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resource)
    });

    if (!res.ok) {
      throw new Error(`Could not create resource ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getBoards = async () => {
   return await this.getResource(`/boards`);
  };

  createBoard = async (boardTitle) => {
    return await this.createResource('/boards', {title: boardTitle});
  };
}
