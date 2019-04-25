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

  addResource = async (url, resource) => {
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

  putResource = async (url, resource) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'PUT',
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

    //return await res.json();
    return res;
  };

  deleteResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Could not create resource ${url}` +
        `, received ${res.status}`)
    }

    //return await res.json();
    return res;
  };

  getBoards = async () => {
   return await this.getResource(`/boards`);
  };

  addBoard = async (boardTitle) => {
    return await this.addResource('/boards', {title: boardTitle});
  };

  getBoard = async (boardId) => {
    return await this.getResource(`/boards/${boardId}`);
  };

  saveBoard = async (boardId, board) => {
    return await this.putResource(`/boards/${boardId}`, board);
  };

  deleteBoard = async (boardId) => {
    return await this.deleteResource(`/boards/${boardId}`);
  };
}
